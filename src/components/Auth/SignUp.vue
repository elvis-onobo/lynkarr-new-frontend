<template>
  <div class="container mx-auto">
    <div class="grid h-screen place-items-center">
      <div
        class="
          md:grid
          grid-cols-2
          gap-1
          p-4
          outline outline-blue-50
          rounded-md
          items-center
        "
      >
        <div class="md:mb-0 mb-2">
          <img src="../assets/images/setup-plan.png" class="" />
        </div>

        <form class="space-y-2">
          <p class="font-extrabold">Start Your Journey!</p>
          <div>
            <input
              type="text"
              placeholder="First Name"
              class="p-2 bg-blue-50 rounded-md text-white"
              autofocus
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              class="p-2 bg-blue-50 rounded-md text-white"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="E-mail"
              class="p-2 bg-blue-50 rounded-md text-white"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone"
              class="p-2 bg-blue-50 rounded-md text-white"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              class="p-2 bg-blue-50 rounded-md text-white"
            />
          </div>

          <router-link :to="{ name: 'dashboard' }">
            <button type="submit" class="bg-black rounded-md p-2 mt-2 text-white hover:bg-gray-600">
                Sign Up
            </button>
          </router-link>
        </form>
      </div>
      <router-link :to="{ name: 'home'}">
        <fa icon="house" /> Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  data() {
    return {
      count: 0,
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