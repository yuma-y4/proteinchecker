<template>
  <div class="indexs">
    <div class="List">
      <list
        v-for="indexs in vcards"
        :key="indexs.id"
        :id="indexs.id"
        :uid="indexs.uid"
      />
    </div>
    <v-main>
      <v-container>
        <router-view />
        <post />
      </v-container>
    </v-main>
  </div>
</template>
<script>
import { db } from "../main";
import post from "../components/post";
import List from "../components/List.vue";
export default {
  name: "indexs",
  data() {
    return {
      vcards: [],
    };
  },
  firestore() {
    return {
      vcards: db.collection("vcards"),
    };
  },
  components: {
    List,
    post,
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
