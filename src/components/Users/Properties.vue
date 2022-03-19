<template>
    <div class="md:grid grid-cols-3 place-items-center gap-1">
        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <img src="../../assets/images/buy_house.png" class="object-cover h-48 w-96">
            <div class="p-4">
                <div class="grid grid-cols-4">
                    <div class="col-span-3">
                        <p class="font-semibold text-sm">Garden Park Estate</p>
                        <p class="text-xs">&#8358;10000/sqm</p>
                    </div>
                    <div class="col-span-1 text-white">
                        <router-link :to="{ name: 'setup-plan' }">
                            <button class="p-2 bg-black rounded-md ">Buy</button>
                        </router-link>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/landwey-logo.png" class="w-20" />
                </div>
            </div>
        </div>

        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <img src="../../assets/images/buy_house.png" class="object-cover h-48 w-96">
            <div class="p-4">
                <div class="grid grid-cols-4">
                    <div class="col-span-3">
                        <p class="font-semibold text-sm">Garden Park Estate</p>
                        <p class="text-xs">&#8358;10000/sqm</p>
                    </div>
                    <div class="col-span-1 text-white">
                        <button class="p-2 bg-black rounded-md ">Buy</button>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/landwey-logo.png" class="w-20" />
                </div>
            </div>
        </div>

        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <img src="../../assets/images/buy_house.png" class="object-cover h-48 w-96">
            <div class="p-4">
                <div class="grid grid-cols-4">
                    <div class="col-span-3">
                        <p class="font-semibold text-sm">Garden Park Estate</p>
                        <p class="text-xs">&#8358;10000/sqm</p>
                    </div>
                    <div class="col-span-1 text-white">
                        <button class="p-2 bg-black rounded-md ">Buy</button>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/landwey-logo.png" class="w-20" />
                </div>
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