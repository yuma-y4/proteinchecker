<template>
  <v-container>
    <v-col align="center">
      <v-card width="500" v-for="indexs in vcards" :key="indexs.id">
        <v-img height="250px"></v-img>
        <v-card-subtitle class="pt-0" >
          {{ indexs.name }}
        </v-card-subtitle>
        <v-card-title  class="pt-0"  >
          {{ indexs.title }}
        </v-card-title>

        <!-- クリック押しで -->
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            read More
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
            <v-card-text >
              <p>{{ indexs.comment }}</p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text color="teal accent-4" @click="reveal = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-col>
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
