<template>
  <v-card elevation="0" class="px-3 py-3 mb-3" outlined>
    <v-list-item class="px-0">
      <div class="pr-2">
        <v-avatar height="80px" width="100px" class="rounded-lg">
          <v-img :src="data.Image" width="100%" height="100%"></v-img>
        </v-avatar>
      </div>
      <v-list-item-content class="px-0">
        <v-list-item-subtitle>
          <strong>Subject:</strong> {{ data.subject }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <strong>Location:</strong> {{ data.location }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <div>Spaces ({{ data.qty }}x)</div>
      <div class="font-weight-bold ml-4 mr-4">${{ data.price * data.qty }}</div>
      <div>
        <v-btn icon>
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "cart-card",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>