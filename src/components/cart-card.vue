<template>
  <v-card elevation="0" class="px-3 py-3 mb-3" outlined>
    <v-list-item class="px-0">
      <div class="pr-2">
        <v-avatar height="80px" width="80px" class="rounded-lg">
          <v-img :src="data.Image" width="100%" height="100%"></v-img>
        </v-avatar>
      </div>
      <v-list-item-content class="px-0">
        <v-list-item-subtitle>
          <strong>Subject:</strong> {{ data.subject }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <strong>Location:</strong> {{ data.location }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <div>Spaces ({{ data.qty }}x)</div>
      <div class="font-weight-bold ml-4 mr-4">${{ data.price * data.qty }}</div>
      <div>
        <v-btn icon @click="remove">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "cart-card",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    remove() {
      let cart = this.cart;
      function remove(array, key, value) {
        const index = array.findIndex((obj) => obj[key] === value);
        return index >= 0
          ? [...array.slice(0, index), ...array.slice(index + 1)]
          : array;
      }
      let c = cart
        .filter((item) => {
          return item.id === this.data.id;
        })
        .map((item) => {
          if (item.qty !== 1) {
            item.qty = item.qty - 1;
          } else {
            return item;
          }
          return item;
        });

      if (c.length > 0 && c[0].qty !== 1) {
        this.$store.commit("setCart", cart);
      } else {
        let array = remove(cart, "id", c[0].id);
        this.$store.commit("setCart", array);
      }
    },
  },
};
</script>