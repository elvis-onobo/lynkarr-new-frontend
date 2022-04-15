<template>
  <div class="container mx-auto">
    <div class="grid h-screen place-items-center">
      <div
        class="
          md:grid
          gap-1
          p-4
          outline outline-green-100
          rounded-md
          items-center
          md:w-3/12
        "
      >
        <form class="space-y-2">
          <p class="font-extrabold">Start Your Journey!</p>
          <div>
            <input
              type="text"
              v-model="firstName"
              placeholder="First Name"
              class="p-2 bg-green-100 rounded-md w-full"
              autofocus
            />
          </div>

          <div>
            <input
              type="text"
              v-model="lastName"
              placeholder="Last Name"
              class="p-2 bg-green-100 rounded-md w-full"
            />
          </div>

          <div>
            <input
              type="text"
              v-model="email"
              placeholder="E-mail"
              class="p-2 bg-green-100 rounded-md w-full"
            />
          </div>

          <div>
            <input
              type="text"
              v-model="phone"
              placeholder="Phone"
              class="p-2 bg-green-100 rounded-md w-full"
            />
          </div>

          <div>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              class="p-2 bg-green-100 rounded-md w-full"
            />
          </div>

          <router-link :to="{ name: 'dashboard' }">
            <button
              type="submit"
              class="
                bg-gradient-to-r
                from-lynkarr-blue
                to-lynkarr-green
                rounded-md
                p-2
                mt-2
                text-white
                hover:bg-gray-600
              "
            >
              Sign Up
            </button>
          </router-link>
        </form>
      </div>
      <router-link :to="{ name: 'home' }">
        <fa icon="house" /> Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, numeric } from "@vuelidate/validators";

export default {
  name: "Stats",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    };
  },
  validations() {
    return {
      firstName: { required, minLength: 3 },
      lastName: { required, minLength: 3 },
      email: { required, email },
      phone: { required, numeric },
      password: { required, minLength: 7 },
    };
  },
  methods: {
    showLogoutModal() {
      this.$swal.fire({
        text: "Are you sure to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Log me out!",
      });
    },
  },
};
</script>