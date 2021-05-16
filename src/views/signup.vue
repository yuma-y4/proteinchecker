<template>
  <v-app>
    <v-container>
      <v-row align-items="center" justify="center">
        <v-card width="500" max-height="400">
          <v-card-title>
            <span class="headline"> 新規登録</span>
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

                <v-btn class="mr-4" @click="signup" :disabled="invalid">
                  signup
                </v-btn>
                <v-btn color="error" text to="/">home </v-btn>
              </v-form>
            </validation-observer>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { required, email, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
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
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
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
    signup: function () {
      firebase.auth().onAuthStateChanged(async (user) => {
        // emailログインする
        firebase.auth() .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // アカウントの作成成功
            const user = firebase.auth().currentUser;
            user.sendEmailVerification().then(() => {
              // 確認のE-Mail送信
              // 強制的にサインアウトにするためはログインを必須とする
              firebase.auth().signOut();
            });
          });

        // 新規登録済みのユーザー情報チェック
        var userCollection = await firebase.firestore().collection("users").doc(user.uid).get();

        // Firestore にドキュメントを作る
          await userCollection.ref.set({
          email: user.email,
          display_name: "名無しさん",
        });
      });
    },
  },
};
</script>
