<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between p-2">
      <div class="w-20">
        <img src="../assets/images/assetifyme-logo.png" />
      </div>

      <div class="">
        <ul class="flex space-x-2">
          <li class="hover:bg-blue-50 p-2 rounded-md">Hi, Elvis</li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="md:grid place-items-center justify-items-center p-4">
      <ul class="grid grid-cols-3 md:flex space-x-2">
        <li class="hover:bg-blue-50 p-2 rounded-md"><fa icon="dashboard" /> Dashboard</li>
        <li class="hover:bg-blue-50 p-2 rounded-md"><fa icon="house" /> Properties</li>
        <li class="hover:bg-blue-50 p-2 rounded-md"><fa icon="wallet" /> Account</li>
        <li class="hover:bg-blue-50 p-2 rounded-md"><fa icon="cogs" /> Settings</li>
        <li class="hover:bg-blue-50 p-2 rounded-md"><fa icon="sign-out" /> Logout</li>
      </ul>
    </div>

    <div class="md:grid grid-cols-2 place-items-center">
      <div class="m-10 bg-blue-50 rounded-md p-5 text-center">
        <pie-chart
          :data="[
            ['Paid', 44],
            ['Unpaid', 23]
          ]"
        ></pie-chart>
        <p>57% Paid</p>
      </div>


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