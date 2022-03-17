<template>
  <div class="container mx-auto">
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
        <li class="hover:bg-blue-50 p-2 rounded-md">Dashboard</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Properties</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">My Assets</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Account</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Payments</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Settings</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Logout</li>
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
    };
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style scoped>
</style>