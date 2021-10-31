<template>
  <v-card class="mx-auto">
    <v-img :src="data.Image" height="150px"></v-img>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <strong>Subject:</strong> {{ data.subject }}
          </v-list-item-title>
          <v-list-item-title>
            <strong>Location:</strong> {{ data.location }}
          </v-list-item-title>
          <v-list-item-title>
            <strong>Price:</strong> ${{ data.price }}
          </v-list-item-title>
          <v-list-item-title>
            <strong>Spaces available:</strong> {{ data.space - spacesInCart }}
          </v-list-item-title>
        </v-list-item-content>
        <div>
          <v-icon large :disabled="data.space === 0"> {{ data.icon }} </v-icon>
        </div>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <v-btn
        :disabled="data.space - spacesInCart === 0"
        color="primary"
        @click="addToCart"
        text
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "lessons-card",
  props: {
    data: {
      type: Object,
      defaulf: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    spacesInCart() {
      if (this.$store.getters.getCart.length !== 0) {
        const items = this.$store.getters.getCart;
        const lessonId = this.data.id;

        let fitems = items
          .filter((item) => {
            return item.id === lessonId;
          })
          .map((item) => {
            return item.qty;
          });

        if (fitems.length > 0) {
          return fitems[0];
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
  },
  methods: {
    addToCart() {
      let cart = this.cart;
      if (this.cart.length > 0) {
        let c = cart
          .filter((item) => {
            return item.id === this.data.id;
          })
          .map((item) => {
            item.qty = item.qty + 1;
            return item;
          });

        if (c.length > 0) {
          this.$store.commit("setCart", cart);
        } else {
          this.data.qty = 1;
          cart.push(this.data);
          this.$store.commit("setCart", cart);
        }
      } else {
        this.data.qty = 1;
        cart.push(this.data);
        this.$store.commit("setCart", cart);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
