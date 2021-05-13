<template>
  <v-container>
    <v-card
      width="500"
      v-for="indexs in vcards"
      :key="indexs.id"
      class="mx-auto"
    >
      <v-card-actions>
        <v-list-item-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-light"
            >tanaka</v-list-item-title
          >
        </v-list-item-content>
      </v-card-actions>

      <v-img height="250px"></v-img>
      <v-col align="center">
        <v-card-subtitle>
          {{ indexs.name }}
        </v-card-subtitle>
      </v-col>
      <v-card-title class="font-weight-medium">
        {{ indexs.title }}
      </v-card-title>

      <v-card-text>
        <p>{{ indexs.comment }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
// ここを追加
import { db } from "../main";

export default {
  data: () => ({
    reveal: false,
    vcards: [],
  }),
  name: "indexs",
  components: {},

  firestore() {
    return {
      vcards: db.collection("vcards"),
    };
  },
  //ここまで追加
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
