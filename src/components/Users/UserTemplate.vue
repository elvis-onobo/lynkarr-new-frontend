<template>
  <div class="text-blue-magenta-900">
    <navbar
      class="
        md:px-16
        px-6
        flex flex-wrap
        bg-white
        items-center
        md-py-0
      "
    >
      <div class="flex flex-1 justify-between items-center">
        <img src="../../assets/images/betar-logo.png" class="w-24" />
      </div>

      <label for="menu-toggle" class="md:hidden block">
        <fa icon="bars" class="bg-blue-magenta-200 p-4 rounded-md" />
      </label>

      <input type="checkbox" class="hidden" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul
            class="
              lg:flex
              items-center
              justify-between
              text-base text-blue-magenta-900
              pt-4
              lg:pt-0
              md:space-x-2
            "
          >
            <router-link :to="{ name: 'profile' }">
              <li
                class="
                  md:hover:border-blue-magenta-900
                  border-b-2 border-transparent
                  p-2
                "
              >
                  Profile
              </li>
            </router-link>
            <li
              class="
                rounded-md
                p-2
                text-white
                bg-blue-magenta-900
                hover:bg-gray-400
              "
              @click="showLogoutModal"
            >
              <fa icon="sign-out" /> Logout
            </li>
          </ul>
        </nav>
      </div>
    </navbar>
    <hr />


    <div class="md:grid p-4 place-items-center">
      <ul class="grid grid-cols-3 md:flex md:space-x-2">
        <router-link :to="{ name: 'dashboard' }">
          <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Dashboard</li>
        </router-link>
        <router-link :to="{ name: 'send' }" router-link-active>
          <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Send</li>
        </router-link>
        <router-link :to="{ name: 'accounts' }">
          <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Accounts</li>
        </router-link>
        <router-link :to="{ name: 'transactions' }">
          <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Transactions</li>
        </router-link>
        <router-link :to="{ name: 'vendor-settings' }">
          <li class="hover:bg-blue-magenta-100 p-2 rounded-md">Settings</li>
        </router-link>
      </ul>
    </div>

    <!-- Load content here -->
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
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
      this.$swal
        .fire({
          text: "Are you sure to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, log me out!",
        })
        .then((result) => {
          if (result.value) {
            this.logoutUser();
          }
        });
    },
    async logoutUser() {
      localStorage.removeItem("token");

      this.$router.push("/");
    },
  },
  computed: {
    // ...mapGetters(['user', 'token', 'role', 'churchId'])
  },
};
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}

.active {
  background-color: #ebe4ff;
  border-radius: 5px;
  /* padding: 3px; */
}

.exact-active {
  background-color: #ebe4ff;
  border-radius: 5px;
  /* padding: 3px; */
}
</style>