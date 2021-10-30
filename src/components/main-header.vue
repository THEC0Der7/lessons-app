<template>
  <div>
    <v-app-bar color="deep-purple accent-4" class="px-10" dense dark>
      <v-toolbar-title @click="$router.push({ name: 'home' })"
        >Page title
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="chnagePage" :disabled="!cartItems" icon>
        <v-badge :content="cartItems" :value="cartItems" color="red" overlap>
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

  computed: {
    cartItems() {
      if (this.$store.getters.getCart.length > 0) {
        const items = this.$store.getters.getCart;

        return items.map((i) => i.qty).reduce((a, b) => a + b);
      } else {
        return null;
      }
    },
  },

  methods: {
    chnagePage() {
      if (this.$route.name === "home") {
        this.$router.push({ name: "cart" });
      } else {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
