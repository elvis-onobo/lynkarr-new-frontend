<template>
    <div class="md:grid grid-cols-3 place-items-center gap-1">
        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <form class="space-y-2 p-8">
                <div>
                    <input type="text" class="bg-blue-50 p-2 rounded-md" placeholder="Name of Property" />
                </div>

                <div>
                    <input type="text" class="bg-blue-50 p-2 rounded-md" placeholder="Price" />
                </div>

                <div>
                    <input type="text" class="bg-blue-50 p-2 rounded-md" placeholder="Location" />
                </div>

                <div>
                    <div>
                        <label>Picture of Property</label>
                    </div>
                    <input type="file" class="" />
                </div>

                <button type="submit" class="p-2 bg-black rounded-md text-white">Add Property</button>
            </form>
        </div>

        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <img src="../../assets/images/buy_house.png" class="object-cover h-48 w-96">
            <div class="p-4">
                <div class="grid grid-cols-4">
                    <div class="col-span-3">
                        <p class="font-semibold text-sm">Garden Park Estate</p>
                        <p class="text-xs">&#8358;10000</p>
                        <p class="text-xs">Central City, Abuja</p>
                    </div>
                    <div class="col-span-1 text-white">
                        <router-link :to="{ name: 'setup-plan' }" class="space-x-1">
                            <button class="p-2 bg-black rounded-md "><fa icon="pen" /></button>
                            <button class="p-2 bg-black rounded-md "><fa icon="trash" /></button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <img src="../../assets/images/buy_house.png" class="object-cover h-48 w-96">
            <div class="p-4">
                <div class="grid grid-cols-4">
                    <div class="col-span-3">
                        <p class="font-semibold text-sm">Garden Park Estate</p>
                        <p class="text-xs">&#8358;10000</p>
                        <p class="text-xs">Central City, Abuja</p>
                    </div>
                    <div class="col-span-1 text-white">
                        <router-link :to="{ name: 'setup-plan' }" class="space-x-1">
                            <button class="p-2 bg-black rounded-md "><fa icon="pen" /></button>
                            <button class="p-2 bg-black rounded-md "><fa icon="trash" /></button>
                        </router-link>
                    </div>
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