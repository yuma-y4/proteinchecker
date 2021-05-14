<template>
  <v-app>
    <v-app-bar color="light-blue darken-2" dark app>
      <v-app-bar-nav-icon
        v-show="$store.state.login_user"
        @click.stop="SideMenu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Protein checker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!$store.state.login_user">
        <v-btn text to="/login">login</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <Sidemenu />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidemenu from "./components/Sidemenu";
import { mapActions } from "vuex";
import firebase from "firebase";
export default {
  name: "App",
  components: {
    Sidemenu,
  },
  data: () => ({
    //
  }),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.$router.push("");
      } else {
        this.deleteLoginUser(user);
        this.$router.push("/");
      }
    });
  },
  methods: {
    ...mapActions(["SideMenu","setLoginUser", "logout", "deleteLoginUser"]),
  },
};
</script>
