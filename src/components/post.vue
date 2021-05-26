<template>
  <v-container>
    <v-row>
      <!-- mdi-pencilを押した際に投稿編集画面を開く -->
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            class="mb-2"
            fab
            dark
            large
           fixed
            bottom
            right
            color="primary"
            v-on="on"
          >
            <v-icon dark> mdi-pencil </v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>

            <v-toolbar-title>投稿の編集</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items> </v-toolbar-items>
          </v-toolbar>
          
          <v-col align="center">
            <v-card class="ma-6" max-width="500">
              <v-img :src="url" height="200px"></v-img> 
              <!-- ファイルの追加 -->
              <v-file-input
                v-model="preview"
                type="file"
                class="ma-2"
                label="写真を選択"
                outlined
                dense
                @click:clear="url = ''"
                @change="Preview_image"
                :image="image"
              ></v-file-input>
              <form class="addcard" @submit.prevent="addCard">
                 <!-- プロテインのジャンルの追加 -->
                <v-select
                
                   label="Protein_type"  
                  class="mx-2"
                  :items="Protein_items"
                  solo
                  clearable
                  prepend-icon
                  v-model="name"
                ></v-select>
                <v-text-field
                  label="Protein_name"
                  class="mx-2"
                  solo
                  v-model="title"
                  type="text"
                ></v-text-field>
                <v-textarea
                  label="コメント"
                  auto-grow
                  outlined
                  rows="3"
                  row-height="25"
                  solo
                  class="mx-2"
                  v-model="comment"
                ></v-textarea>
                <v-btn  class="ma-2" @click="createcard" type="submit" >
                  Post
                </v-btn>
              </form>
            </v-card>
          </v-col>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../main'
export default {
  data() {
    return {
      dialog: false,
      name:'',
      title:'',
      comment:'',
      Protein_items: [
        "ホエイプロテイン",
        "カゼインプロテイン",
        "ソイプロテイン",
      ],
    };
  },
  // 投稿の際に画像のイメージを表示する
  methods: {
    Preview_image() {
      this.url = URL.createObjectURL(this.preview);
    },  
    createcard () {
      db.collection('vcards').add({
        'title': this.title,
        'name': this.name,
        'comment': this.comment,
         'uid': this.$store.state.login_user.uid

      })
    
    }
  }
}
</script>
