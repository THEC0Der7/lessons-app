<template>
  <div>
    <h3 class="h6 mb-0">Sort by</h3>
    <v-radio-group class="mt-2" v-model="selectedSortBy" column>
      <template v-for="(opt, idx) in sortBy">
        <v-radio :key="idx" :label="opt.label" :value="opt.value"></v-radio>
      </template>
    </v-radio-group>

    <h3 class="h6 mb-0">Order by</h3>
    <v-radio-group class="mt-2" v-model="selectedOrderBy" column>
      <template v-for="(opt, idx) in orderBy">
        <v-radio :key="idx" :label="opt.label" :value="opt.value"></v-radio>
      </template>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "filters",
  data() {
    return {
      selectedSortBy: null,
      selectedOrderBy: null,
      sortBy: [
        {
          label: "Subjects",
          value: "subject",
        },
        {
          label: "Location",
          value: "location",
        },
        {
          label: "Price",
          value: "price",
        },
        {
          label: "Availability",
          value: "space",
        },
      ],
      orderBy: [
        {
          label: "Ascending",
          value: "asc",
        },
        {
          label: "Descending",
          value: "desc",
        },
      ],
    };
  },
  watch: {
    selectedSortBy(f) {
      this.selectedOrderBy = this.selectedOrderBy
        ? this.selectedOrderBy
        : "asc";
      let payload = {
        sort_by: f,
        order_by: this.selectedOrderBy,
      };
      this.$store.commit("setFilters", payload);
    },
    selectedOrderBy(f) {
      if (this.selectedSortBy !== null) {
        let payload = {
          sort_by: this.selectedSortBy,
          order_by: f,
        };
        this.$store.commit("setFilters", payload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>