<template>
  <v-app>
    <main-header />
    <v-main class="mt-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import mainHeader from "./components/main-header.vue";
export default {
  components: { mainHeader },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" >
html {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
