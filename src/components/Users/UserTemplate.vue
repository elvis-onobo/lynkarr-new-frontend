<template>
  <div class="flex min-h-screen">
    <div class="w-64 border-r border-gray-200 space-y-2 text-sm">
      <div class="py-2 px-6">
        <router-link :to="{ name: 'dashboard' }">
          <img src="../../assets/logo.png" alt="Lynkarr logo" class="w-36" />
        </router-link>
      </div>

      <router-link :to="{ name: 'dashboard' }">
        <div class="px-2 pt-5">
          <div class="hover:bg-blue-100 p-2 rounded">
            <span class="mx-4 mb-2 text-md text-gray-700"
              ><fa icon="dashboard" /> Dashboard</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'dashboard' }">
        <div class="px-2">
          <div class="hover:bg-blue-100 p-2 rounded">
            <span class="mx-4 mb-2 text-md text-gray-700"
              ><fa icon="user" /> Profile</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'dashboard' }">
        <div class="px-2">
          <div class="hover:bg-blue-100 p-2 rounded">
            <span class="mx-4 mb-2 text-md text-gray-700"
              ><fa icon="list" /> Businesses</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'dashboard' }">
        <div class="px-2">
          <div class="hover:bg-blue-100 p-2 rounded">
            <span class="mx-4 mb-2 text-md text-gray-700"
              ><fa icon="wallet" /> Payments</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'dashboard' }">
        <div class="px-2">
          <div class="hover:bg-blue-100 p-2 rounded">
            <span class="mx-4 mb-2 text-md text-gray-700"
              ><fa icon="code" /> API Keys</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'dashboard' }">
        <div class="px-2">
          <div class="hover:bg-blue-100 p-2 rounded">
            <span class="mx-4 mb-2 text-md text-gray-700"
              ><fa icon="cogs" /> Settings</span
            >
          </div>
        </div>
      </router-link>

      <div class="divide divide-gray-50 divide-y-0"></div>

      <div class="place-items-end">
        <router-link :to="{ name: 'dashboard' }">
          <div class="px-2">
            <div class="hover:bg-blue-100 p-2 rounded">
              <span class="mx-4 mb-2 text-md text-gray-700"
                ><fa icon="bell" /> Notifications</span
              >
            </div>
          </div>
        </router-link>


        <router-link :to="{ name: 'dashboard' }">
          <div class="px-2" @click="showLogoutModal">
            <div class="hover:bg-blue-100 p-2 rounded">
              <span class="mx-4 mb-2 text-md text-gray-700"
                ><fa icon="sign-out" /> Logout</span
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="flex-1">
      <div class="flex justify-between py-3 px-6 border-b space-x-6">
        <form>
          <input
            type="text"
            class="p-2 rounded-l-md bg-gray-50"
            placeholder="Search"
          />
          <button
            class="
              bg-gradient-to-r
              from-lynkarr-blue
              to-lynkarr-green
              text-white
              p-2
              rounded-r-md
            "
          >
            <fa icon="search" />
          </button>
        </form>
      </div>

      <!-- Load content here -->
      <div>
        <p class="px-7 pt-4 text-black text-2xl">Hello, Elvis.</p>
        <router-view></router-view>
      </div>
      <!-- Load content here -->
    </div>
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
  background-color: #dbeae7;
  border-radius: 5px;
  /* padding: 3px; */
}

.exact-active {
  background-color: #dbeae7;
  border-radius: 5px;
  /* padding: 3px; */
}
</style>