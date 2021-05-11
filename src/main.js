import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"

Vue.config.productionTip = false
import { firestorePlugin } from "vuefire"
import firebase from "firebase"
import "firebase/firestore"

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyDbHvMfaIhRbp21O76XYGaAkdT5JdH0j-U",
  authDomain: "proteinchecker.firebaseapp.com",
  projectId: "proteinchecker",
  storageBucket: "proteinchecker.appspot.com",
  messagingSenderId: "401057299452",
  appId: "1:401057299452:web:087a5d3e62a005f6089079",
});

export const db = firebase.firestore()
export const auth = firebase.auth()
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
