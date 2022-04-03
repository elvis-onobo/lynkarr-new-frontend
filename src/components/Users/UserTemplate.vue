<template>
  <div class="container mx-auto text-blue-magenta-900">
    <div class="flex items-center justify-between p-2 ">
      <router-link :to="{ name: 'dashboard'}">
      <div class="w-20 flex items-center space-x-2 font-extrabold text-2xl">
        <img src="../../assets/images/betar-logo.png" />
        <span>Betarr</span>
      </div>
      </router-link>

      <div class="">
        <ul class="flex space-x-2">
          <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Hi, Elvis</li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="md:grid p-4 place-items-center">
      <ul class="grid grid-cols-3 md:flex">
        <router-link :to="{ name: 'dashboard' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Dashboard</li>
        </router-link>
        <router-link :to="{ name: 'send' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Send</li>
        </router-link>
        <router-link :to="{ name: 'accounts' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Accounts</li>
        </router-link>
        <router-link :to="{ name: 'transactions' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Transactions</li>
        </router-link>
        <router-link :to="{ name: 'profile' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Profile</li>
        </router-link>
        <router-link :to="{ name: 'vendor-settings' }">
            <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Settings</li>
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