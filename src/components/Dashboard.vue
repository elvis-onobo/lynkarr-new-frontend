<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between p-2">
      <div class="w-20">
        <img src="../assets/images/assetifyme-logo.png" />
      </div>

      <div class="">
        <ul class="flex space-x-2">
          <li>Property Listing</li>
          <li>Account</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="grid place-items-center justify-items-center p-4">
      <ul class="flex space-x-2">
        <li class="hover:bg-blue-50 p-2 rounded-md">Property Listing</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Account</li>
        <li class="hover:bg-blue-50 p-2 rounded-md">Logout</li>
      </ul>
    </div>

    <div class="md:grid grid-cols-2 place-items-center">
      <div class="m-10 bg-fuchsia-200 rounded-md p-5 text-center">
        <pie-chart
          :data="[
            ['Paid', 44],
            ['Unpaid', 23]
          ]"
        ></pie-chart>
        <p>57% Paid</p>
      </div>


    </div>
    <!-- </div> -->

    <!-- <div class="grid grid-cols-2 gap-4 m-4">
      <div class="max-w-full">
        <pie-chart
          :data="[
            ['Blueberry', 44],
            ['Strawberry', 23],
            ['Blackberry', 12],
            ['Realberry', 50],
          ]"
        ></pie-chart>
        <p>Church Population Comparison</p>
      </div>
      <div class="">
        <bar-chart
          :data="[
            ['Blueberry', 44],
            ['Strawberry', 23],
            ['Blackberry', 12],
            ['Realberry', 50],
          ]"
        ></bar-chart>
      </div>
      <div class="">
        <column-chart
          :data="[
            ['Blueberry', 44],
            ['Strawberry', 23],
            ['Blackberry', 12],
            ['Realberry', 50],
          ]"
        ></column-chart>
      </div>
      <div class="">
        <column-chart
          :data="[
            ['Blueberry', 44],
            ['Strawberry', 23],
            ['Blackberry', 12],
            ['Realberry', 50],
          ]"
        ></column-chart>
      </div>
    </div> -->
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