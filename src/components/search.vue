<template>
  <div>
    <v-text-field
      solo
      label="Search..."
      max-width="500px"
      hide-details
      v-model="search"
      clearable
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(q) {
      this.$store.commit("setSearch", q);
    },
  },
};
</script>