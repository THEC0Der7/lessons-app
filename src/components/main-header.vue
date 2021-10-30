<template>
  <div>
    <v-app-bar color="deep-purple accent-4" class="px-10" dense dark>
      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-badge :content="1" :value="true" color="red" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "main-header",

  data: () => ({}),
};
</script>
