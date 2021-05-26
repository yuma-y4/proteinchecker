<template>
  <v-container>
    <v-card width="500" class="mx-auto">
      <v-card-actions>
        <v-list-item-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-light">
            
         </v-list-item-title>
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
import { db } from "../main";
export default {
  props: ['id', 'uid'],
  data() {
    return {
      indexs: {},
      user: {},
    };
  },
  firestore() {
    return {
      indexs: db.collection('vcards').doc(this.$props.id),
      user: db.collection('users').doc(this.$props.uid),
    };
  },
};
</script>
