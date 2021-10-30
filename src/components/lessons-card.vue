<template>
  <v-card class="mx-auto">
    <v-img :src="data.Image" height="150px"></v-img>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <strong>Subject:</strong> {{ data.subject }}
          </v-list-item-title>
          <v-list-item-title>
            <strong>Location:</strong> {{ data.location }}
          </v-list-item-title>
          <v-list-item-title>
            <strong>Price:</strong> ${{ data.price }}
          </v-list-item-title>
          <v-list-item-title>
            <strong>Spaces available:</strong> {{ data.space }}
          </v-list-item-title>
        </v-list-item-content>
        <div>
          <v-icon large :disabled="data.space === 0"> {{ data.icon }} </v-icon>
        </div>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <v-btn color="primary" text> Add to cart </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "lessons-card",
  props: {
    data: {
      type: Object,
      defaulf: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>