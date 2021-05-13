<template>
  <v-container>
    <v-col align="center">
      <v-card width="500">
        <v-img height="250px"></v-img>

        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-subtitle>
          {{ name }}
        </v-card-subtitle>
        <!-- クリック押しで -->
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            read More
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
            <v-card-text class="pb-0">
              <p>{{ comment }}</p>
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
export default {
  data: () => ({
    reveal: false,
  }),
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    cardIndex: {
      type: String,
      required: true,
    },
  },
  methods: {},
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
