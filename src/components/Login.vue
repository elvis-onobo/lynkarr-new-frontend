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
          <p class="font-extrabold">Welcome Back!</p>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              class="p-2 bg-blue-50 rounded-md text-back"
              autofocus
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              class="p-2 bg-blue-50 rounded-md text-black"
            />
          </div>
          <router-link :to="{ name: 'dashboard' }">
          <button type="submit" class="bg-black rounded-md mt-2 p-2 text-white">
            Login
          </button>
          </router-link>
          <a href="" class="p-2">Forgot Password</a>
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