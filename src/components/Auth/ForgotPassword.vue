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
        <img src="../../assets/logo.png" class="w-28" />
        <form class="space-y-2">
          <p class="font-extrabold">We all forget sometimes!</p>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              class="p-2 bg-green-100 rounded-md w-full"
              autofocus
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
                mt-2
                p-2
                text-white
                hover:bg-gray-600
              "
            >
              Send Reset Password Link
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