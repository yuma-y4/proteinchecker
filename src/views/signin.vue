<template>
  <v-app>
    <v-container>
      <v-row align-items="center" justify="center">
        <v-card width="500" max-height="400">
          <v-card-title>
            <span class="headline">Login-form</span>
          </v-card-title>
          <v-col align="center">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required|min:8"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    counter
                    @click:append="show = !show"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-btn class="mr-4" @click="login" :disabled="invalid">
                  Login
                </v-btn>
                <v-btn class="ma-5" outlined to="/signup">
                  Create your account?
                </v-btn>
                <password />
              </v-form>
            </validation-observer>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// formに入力した際にいつ検証が行われるか lazy=ユーザーが入力を離れるとトリガー
setInteractionMode("lazy");
extend("required", {
  ...required,
  message: "{_field_}に入力をしてください。",
});
extend("email", {
  ...email,
  message: "有効なメールアドレスを登録してください",
});
extend("min", {
  ...min,
  message: "{_field_}は{length}文字以上でないといけません",
});
import password from "../components/password.vue";
import firebase from "firebase/app";
import "firebase/auth";
import { required, email, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    password,
  },
  data: () => ({
    name: "",
    email: "",
    password: "",
    show: false,
  }),
  login() {
    this.$refs.observer.validate();
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    },
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange(file) {
      if (!file) {
        return;
      }
      this.createImage(file);
    },
  },
};
</script>
