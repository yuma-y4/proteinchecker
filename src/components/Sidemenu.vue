<template>
  <v-navigation-drawer v-model="$store.state.drawer" temporary fixed>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle> Hello! </v-list-item-subtitle>
        <v-list-item-title class="title"> Applica </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "User", icon: "mdi-view-dashboard", link: { name: "user" } },
        { title: "My favorite", icon: "mdi-image" },
        { title: "Index", icon: "mdi-image", link: { name: "indexs" } },
      ],
      right: null,
    };
  },
};
</script>
