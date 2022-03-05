<template>
  <div class="col-span-10 bg-orange-50">
    <div class="grid grid-cols-2 gap-4 m-4">
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