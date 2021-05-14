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
  </div>
</template>
<script>
import { db } from "../main";

import List from "@/components/List.vue";
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

  // ここから追加
  components: {
    List,
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
