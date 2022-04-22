<template>
  <div class="flex min-h-screen text-gray-700">
    <vue3-progress-bar></vue3-progress-bar>

    <!-- Sidebar for mobile screens -->
    <TransitionRoot :show="sideBarOpened">
      <Dialog
        as="div"
        :open="sideBarOpened"
        @close="sideBarOpened = false"
        class="fixed inset-0 z-40"
      >
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-200 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-200 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="
              flex flex-col
              md:hidden
              relative
              z-10
              h-full
              w-64
              bg-gray-50
              border-r border-gray-200
            "
          >
            <div class="flex justify-between items-center">
              <img
                src="../../assets/logo.png"
                alt="Lynkarr logo"
                class="w-36 p-4"
              />
              <span @click="sideBarOpened = false">
                <fa icon="close" class="p-4 m-2" />
              </span>
            </div>

            <!-- select business dropdoen mobile -->
            <div class="px-5 mb-2">
              <Menu as="div" class="relative focus:outline-none mt-3">
                <MenuButton>
                  <div class="flex items-center space-x-2">
                    <span>Select business</span>
                    <fa icon="caret-down" />
                  </div>
                </MenuButton>

                <transition
                  enter-active-class="transition transform duration-100 ease-out"
                  enter-from-class="opacity-0 scale-75"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition transform duration-100 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-75"
                >
                  <MenuItems
                    class="
                      absolute
                      bg-white
                      rounded-md
                      shadow-lg
                      border
                      w-48
                      p-2
                      focus:outline-none
                      origin-top-left
                    "
                  >
                    <MenuItem v-slot="{ active }">
                      <router-link :to="{ name: 'dashboard' }">
                        <span
                          :class="{ 'bg-blue-100': active }"
                          class="
                            block
                            p-2
                            rounded-md
                            hover:bg-gradient-to-r
                            from-blue-100
                            to-green-100
                          "
                          ><fa icon="plus" /> Add Business</span
                        >
                      </router-link>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                      <router-link :to="{ name: 'dashboard' }">
                        <span
                          :class="{ 'bg-blue-100': active }"
                          class="
                            block
                            p-2
                            rounded-md
                            hover:bg-gradient-to-r
                            from-blue-100
                            to-green-100
                          "
                          ><fa icon="money-bill" /> Lynkarr</span
                        >
                      </router-link>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
            <!-- end select business -->

            <!-- mobile search -->
            <form class="px-5 mb-2">
              <input
                type="text"
                class="p-2 rounded-l-md bg-gray-50 w-40"
                placeholder="Search transactions"
              />
              <button
                class="
                  bg-gradient-to-r
                  from-lynkarr-blue
                  to-lynkarr-green
                  text-white
                  p-2
                  rounded-r-md
                  focus:outline-none
                "
              >
                <fa icon="search" />
              </button>
            </form>
            <!-- end mobile search -->

            <div class="overflow-y-auto flex-1">
              <router-link :to="{ name: 'dashboard' }">
                <div>
                  <div
                    class="
                      hover:bg-gradient-to-r
                      from-blue-100
                      to-green-200
                      p-2
                      hover:p-4
                      rounded
                      focus:outline-none
                    "
                  >
                    <span class="mx-4 mb-2 text-md">
                      <fa icon="dashboard" /> Dashboard
                    </span>
                  </div>
                </div>
              </router-link>

              <router-link :to="{ name: 'dashboard' }">
                <div>
                  <div
                    class="
                      hover:bg-gradient-to-r
                      from-blue-100
                      to-green-200
                      p-2
                      hover:p-4
                      rounded
                      focus:outline-none
                    "
                  >
                    <span class="mx-4 mb-2 text-md"
                      ><fa icon="user" /> Profile</span
                    >
                  </div>
                </div>
              </router-link>

              <router-link :to="{ name: 'dashboard' }">
                <div>
                  <div
                    class="
                      hover:bg-gradient-to-r
                      from-blue-100
                      to-green-200
                      p-2
                      hover:p-4
                      rounded
                      focus:outline-none
                    "
                  >
                    <span class="mx-4 mb-2 text-md"
                      ><fa icon="wallet" /> Transactions</span
                    >
                  </div>
                </div>
              </router-link>

              <router-link :to="{ name: 'dashboard' }">
                <div>
                  <div
                    class="
                      hover:bg-gradient-to-r
                      from-blue-100
                      to-green-200
                      p-2
                      hover:p-4
                      rounded
                      focus:outline-none
                    "
                  >
                    <span class="mx-4 mb-2 text-md"
                      ><fa icon="key" /> API Keys</span
                    >
                  </div>
                </div>
              </router-link>

              <router-link :to="{ name: 'dashboard' }">
                <div>
                  <div
                    class="
                      hover:bg-gradient-to-r
                      from-blue-100
                      to-green-200
                      p-2
                      hover:p-4
                      rounded
                      focus:outline-none
                    "
                  >
                    <span class="mx-4 mb-2 text-md"
                      ><fa icon="cogs" /> Settings</span
                    >
                  </div>
                </div>
              </router-link>

              <router-link :to="{ name: 'dashboard' }">
                <div @click="showLogoutModal">
                  <div
                    class="
                      hover:bg-gradient-to-r
                      from-blue-100
                      to-green-200
                      p-2
                      hover:p-4
                      rounded
                    "
                  >
                    <span class="mx-4 mb-2 text-md"
                      ><fa icon="sign-out" /> Logout</span
                    >
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition-opacity ease-lineear duration-200"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-lineear duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="
              fixed
              inset-0
              bg-gray-600
              md:bg-gray-0
              bg-opacity-50
              md:bg-opacity-0
            "
          ></DialogOverlay>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
    <!-- Sidebar for mobile screens -->

    <!-- Sidebar for large screens -->
    <div
      class="
        flex-col
        hidden
        md:block
        w-64
        border-r border-gray-200
        space-y-2
        text-sm
        md:fixed md:bg-white md:z-10 md:h-screen
      "
    >
      <div class="py-2 px-6">
        <router-link :to="{ name: 'dashboard' }">
          <div class="flex justify-between items-center">
            <img src="../../assets/logo.png" alt="Lynkarr logo" class="w-32" />
            <!-- <fa icon="close" /> -->
          </div>
        </router-link>
      </div>

      <div class="px-4">
        <p class="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-md">
          Starter Business
        </p>
      </div>

      <router-link :to="{ name: 'dashboard' }">
        <div class="pt-5">
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"
              ><fa icon="dashboard" /> Dashboard</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'profile' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="user" /> Profile</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'transactions' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"
              ><fa icon="arrow-right-arrow-left" /> Transactions</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'bank-account' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"
              ><fa icon="bank" /> Bank Account</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'funding' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="wallet" /> Funding</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'withdraw' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"
              ><fa icon="money-bill" /> Withdraw</span
            >
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'webhook' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="link" /> Webhook</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'api-keys' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="key" /> API Keys</span>
          </div>
        </div>
      </router-link>


      <router-link :to="{ name: 'team' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="users" /> Team</span>
          </div>
        </div>
      </router-link>


      <router-link :to="{ name: 'settings' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="shield" /> Roles</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{ name: 'settings' }">
        <div>
          <div
            class="
              hover:bg-gradient-to-r
              from-blue-100
              to-green-200
              p-2
              hover:p-4
            "
          >
            <span class="mx-4 mb-2 text-md"><fa icon="cogs" /> Settings</span>
          </div>
        </div>
      </router-link>

      <div @click="showLogoutModal">
        <div
          class="
            hover:bg-gradient-to-r
            from-blue-100
            to-green-200
            p-2
            hover:p-4
          "
        >
          <span class="mx-4 mb-2 text-md"><fa icon="sign-out" /> Logout</span>
        </div>
      </div>

      <!-- <div class="text-center">
        <fa
          icon="caret-left"
          class="
            p-2
            rounded-full
            bg-gradient-to-r
            from-lynkarr-blue
            to-lynkarr-green
            text-white
          "
        />
      </div> -->
    </div>
    <!-- End sidebar for large screens -->

    <!-- Top bar -->
    <div class="flex-1 fixed md:bg-white md:w-full">
      <div class="md:flex hidden justify-between py-3 px-5 border-b space-x-6">
        <form class="md:ml-64">
          <input
            type="text"
            class="p-2 rounded-l-md bg-gray-50 md:w-80 focus:outline-none"
            placeholder="Search transactions"
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

        <div class="flex items-center space-x-2 divide divide-x-2">
          <div class="space-x-2 flex items-center">
            <span>Go Live</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <div>
            <Menu as="div" class="relative focus:outline-none p-2">
              <MenuButton>
                <div class="flex items-center space-x-2">
                  <span>Select business</span>
                  <fa icon="caret-down" />
                </div>
              </MenuButton>

              <transition
                enter-active-class="transition transform duration-100 ease-out"
                enter-from-class="opacity-0 scale-75"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition transform duration-100 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-75"
              >
                <MenuItems
                  class="
                    absolute
                    right-0
                    bg-white
                    rounded-md
                    shadow-lg
                    border
                    w-48
                    p-2
                    focus:outline-none
                    origin-top-right
                  "
                >
                  <MenuItem v-slot="{ active }">
                    <router-link :to="{ name: 'create-business' }">
                      <span
                        :class="{ 'bg-blue-100': active }"
                        class="
                          block
                          p-2
                          rounded-md
                          hover:bg-gradient-to-r
                          from-blue-100
                          to-green-100
                        "
                        ><fa icon="plus" /> Add Business</span
                      >
                    </router-link>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <router-link :to="{ name: 'dashboard' }">
                      <span
                        :class="{ 'bg-blue-100': active }"
                        class="
                          block
                          p-2
                          rounded-md
                          hover:bg-gradient-to-r
                          from-blue-100
                          to-green-100
                        "
                        ><fa icon="briefcase" /> Lynkarr</span
                      >
                    </router-link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
    <!-- Load content here -->
    <div class="block overflow-y-auto flex-1 md:ml-64 md:pt-20">
      <fa
        icon="bars"
        class="
          mx-7
          mt-4
          p-2
          md:hidden
          text-xl
          bg-gradient-to-r
          from-lynkarr-blue
          to-lynkarr-green
          text-white
          rounded-md
        "
        @click="sideBarOpened = true"
      />
      <Transition name="fade" :duration="{ enter: 500, leave: 500 }">
        <router-view></router-view>
      </Transition>
    </div>
    <!-- Load content here -->
  </div>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";

export default {
  name: "UsersTemplate",
  data() {
    return {
      count: 0,
      showStatsMenu: false,
      sideBarOpened: false,
    };
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #68d4ad;
}

input:focus + .slider {
  box-shadow: 0 0 1px #68d4ad;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>