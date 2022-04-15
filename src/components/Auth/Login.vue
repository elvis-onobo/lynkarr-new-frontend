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
          <p class="font-extrabold">Welcome Back!</p>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              class="p-2 bg-green-100 rounded-md w-full"
              autofocus
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              class="p-2 bg-green-100 rounded-md w-full"
            />
          </div>

          <router-link :to="{ name: 'dashboard' }">
          <button type="submit" 
            class="bg-gradient-to-r
            from-lynkarr-blue
            to-lynkarr-green 
            rounded-md mt-2 p-2 
            text-white 
            hover:bg-gray-600"
          >
            Login
          </button>
          </router-link>

          <router-link :to="{ name: 'forgot'}">
            <span class="p-2">Forgot Password</span>
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