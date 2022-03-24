<template>
  <div>
    <div
      class="md:grid grid-cols-3 place-items-center gap-1 text-blue-magenta-900"
    >
      <div
        class="outline outline-solid outline-blue-magenta-100 rounded-md m-8"
      >
        <img
          src="../../assets/images/buy_house.png"
          class="object-cover h-48 w-96"
        />
      </div>

      <div
        class="outline outline-solid outline-blue-magenta-100 rounded-md m-8"
      >
        <img
          src="../../assets/images/buy_house.png"
          class="object-cover h-48 w-96"
        />
      </div>

      <div
        class="outline outline-solid outline-blue-magenta-100 rounded-md m-8"
      >
        <img
          src="../../assets/images/buy_house.png"
          class="object-cover h-48 w-96"
        />
      </div>
    </div>

    <div class="grid place-items-center p-8">
        <hr class="w-36 p-4" />
        <div class="grid grid-cols-4 place-items-center">
            <div>
                <p><fa icon="check"/> Electricity </p>
            </div>

            <div>
                <p><fa icon="check"/> Water </p>
            </div>

            <div>
                <p><fa icon="check"/> Pool </p>
            </div>

            <div>
                <p><fa icon="check"/> Road </p>
            </div>

            <div>
                <p><fa icon="check"/> Security </p>
            </div>

            <div>
                <p><fa icon="check"/> Recreation Center </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyDetails",
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