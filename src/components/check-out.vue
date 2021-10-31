<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      label="Phone number"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid || name === '' || phone === ''"
      color="success"
      class="ml-auto mt-3"
      @click="checkout"
    >
      Checkout
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "check-out",
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => /^([a-zA-Z])+$/.test(v) || "Name must be only letters",
      ],
      phone: "",
      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) => /^[0-9]*$/.test(v) || "Phone number must be only numbers",
      ],
    };
  },

  methods: {
    checkout() {
      let validate = this.$refs.form.validate();
      if (validate) {
        this.$refs.form.reset();
        this.$swal({
          icon: "success",
          title: "Done",
          text: "Thank you for perchasing",
        });
      }
    },
  },
};
</script>