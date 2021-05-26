<template>
  <div class="indexs">
    <div class="List">
      <list
        v-for="indexs in  Myvcards"
        :key="indexs.id"
        :id="indexs.id"
        :uid="indexs.uid"
      />
    </div>
  
  </div>
</template>
<script>
import { db } from "../main";
import List from "../components/List.vue";
export default {
  name: "user",
  data() {
    return {
     user: {},
     Myvcards: [],
     
    };
  },
  firestore() {
    return {
   
       user : db.collection('users').doc(this.$route.params.uid),
        Myvcards: db.collection("vcards").where("uid", "==", this.$route.params.uid)
    };
  },

  // ここから追加
  components: {
    List,
  },
};
</script>

