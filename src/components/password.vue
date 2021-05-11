<template>
  <v-dialog v-model="dialog" persistentf max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Password reset
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Password reset</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="email"  v-model="email" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text   @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="reset">
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data: () => ({
    email: "",
     dialog: false,
  
  }),
    methods: {
     reset:function () {
      firebase.auth().sendPasswordResetEmail(this.email);
    },
   },
  };
</script>
