<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <filters />
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="12">
            <search />
          </v-col>
          <template v-for="(lesson, idx) in filterLessons">
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
import Search from "../components/search.vue";
import lessons from "../data/lessons";
export default {
  name: "Home",

  components: { Filters, LessonsCard, Search },

  data() {
    return {
      filter: null,
    };
  },

  computed: {
    lessons() {
      return lessons;
    },

    filters() {
      return this.$store.getters.getFilters;
    },

    filterLessons() {
      function compareValues(key, order = "asc") {
        return function innerSort(a, b) {
          // eslint-disable-next-line no-prototype-builtins
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }

          const varA =
            typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
          const varB =
            typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return order === "desc" ? comparison * -1 : comparison;
        };
      }
      if (this.filter) {
        return lessons.sort(
          compareValues(this.filter.sort_by, this.filter.order_by)
        );
      } else {
        return lessons;
      }
    },
  },

  watch: {
    filters(f) {
      this.filter = f;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
