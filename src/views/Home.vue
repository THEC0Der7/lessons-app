<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <filters />
      </v-col>
      <v-col cols="10">
        <lessons-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filters from "../components/filters.vue";
import LessonsCard from "../components/lessons-card.vue";
export default {
  name: "Home",

  components: { Filters, LessonsCard },
};
</script>
