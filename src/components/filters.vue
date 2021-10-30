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
          value: "subjects",
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
          value: "availability",
        },
      ],
      orderBy: [
        {
          label: "Ascending",
          value: "ascending",
        },
        {
          label: "Descending",
          value: "descending",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>