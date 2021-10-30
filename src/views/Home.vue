<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <filters />
      </v-col>
      <v-col cols="10">
        <v-row>
          <template v-for="(lesson, idx) in lessons">
            <v-col :key="idx" cols="4">
              <lessons-card :data="lesson" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filters from "../components/filters.vue";
import LessonsCard from "../components/lessons-card.vue";
import lessons from "../data/lessons";
export default {
  name: "Home",

  components: { Filters, LessonsCard },

  data() {
    return {};
  },

  computed: {
    lessons() {
      return lessons;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
