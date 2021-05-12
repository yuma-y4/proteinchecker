<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-3">
            <div style="margin-right: 60px">Protein <br /></div>
            <div style="margin-left: 60px">checker</div>
          </h1>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <v-card-title>
        <span class="font-weight-light">Protein checkerとは</span>
      </v-card-title>
      <v-row>
        <v-col>
          <v-card width="350" height="190">
            <v-card-text>
              <p class="font-weight-medium">簡単レビュー</p>
              <div class="text--primary">
                誰もがわかりやすいレビュー構造を採用したことで
                気軽にレビューをすることができます。
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="350" height="190">
            <v-card-text>
              <p class="font-weight-medium">わかりやすいデザイン</p>
              <div class="text--primary">
                シンプルのデザインを採用し、誰もが見やすいレビューサイトを作りました。<br />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card max-width="350" height="190">
            <v-card-text>
              <p class="font-weight-medium">レスポンシブ対応</p>
              <div class="text--primary">
                このサイトはレスポンシブWebデザインを採用しています。スマホやPC、さまざまな機種でも快適に閲覧することができます。
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
       
    
        
       <div class="text-center" style="margin-top: 60px">
      <v-btn  elevation="6"  to="/signup"  v-show="!$store.state.login_user">
     
        新規登録をしてレビューを見る
       
      </v-btn>
      </div>
        
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
