<template>
  <div id="cart">
    <v-container>
      <v-row>
        <v-col cols="7">
          <v-card class="rounded-lg" outlined>
            <v-card-title>Cart</v-card-title>
            <v-card-text>
              <template v-for="(item, idx) in cart">
                <cart-card :key="idx" :data="item" />
              </template>
              <p v-if="cart.length <= 0" class="text-center">Empty Cart</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card class="rounded-lg" outlined>
            <v-card-title class="pb-1">Checkout</v-card-title>
            <v-card-text>
              <check-out />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CartCard from "../components/cart-card.vue";
import CheckOut from "../components/check-out.vue";
export default {
  name: "cart",
  components: { CartCard, CheckOut },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>
