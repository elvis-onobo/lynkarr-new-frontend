<template>
  <div class="container mx-auto text-blue-magenta-900">
    <div class="flex items-center justify-between p-2 ">
      <div class="w-20">
        <img src="../../assets/images/assetifyme-logo.png" />
      </div>

      <div class="">
        <ul class="flex space-x-2">
          <li class="hover:bg-blue-50 p-2 rounded-md">Hi, Elvis</li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="md:grid p-4 place-items-center">
      <ul class="grid grid-cols-3 md:flex">
        <router-link :to="{ name: 'admin-dashboard' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Dashboard</li>
        </router-link>
        <router-link :to="{ name: 'admin-transactions' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Transactions</li>
        </router-link>
        <router-link :to="{ name: 'admin-staff' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Staff</li>
        </router-link>
        <router-link :to="{ name: 'admin-security' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Security</li>
        </router-link>
        <li class="hover:bg-blue-magenta-100 p-2 rounded-md" @click="showLogoutModal">Logout</li>
      </ul>
    </div>

    <!-- Load content here -->
    <router-view></router-view>
    <!-- Load content here -->

  </div>
</template>

<script>
export default {
  name: "UsersTemplate",
  data() {
    return {
      count: 0,
      showStatsMenu: false,
    };
  },
  methods: {
    showLogoutModal() {
      this.$swal.fire({
        text: "Are you sure to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Log me out!",
      }).then((result) => {
        if (result.value) {
          this.logoutUser()
        }
      })
    },
    async logoutUser(){
        localStorage.removeItem('token')

        this.$router.push('/')
      },
  },
  computed: {
    // ...mapGetters(['user', 'token', 'role', 'churchId'])
  }
};
</script>

<style scoped>
</style>