<template>
    <div class="md:grid place-items-center gap-1">
        <p class="font-extrabold text-center">Setup Your Payment Plan</p>
        <div class="outline outline-solid outline-blue-50 rounded-md m-8">
            <img src="../../../assets/images/buy_house.png" class="object-cover h-48 w-96">
            <div class="p-4 md:grid md:grid-cols-4 gap-2">
                <div class="col-span-3 md:p-2">
                    <form class="space-y-2">
                        <div>
                            <input type="text" class="p-2 bg-blue-50 rounded-md w-full" placeholder="Amount" />
                        </div>

                        <div>
                            <select class="p-2 bg-blue-50 rounded-md w-full">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <button type="submit" class="p-2 text-white bg-black rounded-md">Submit</button>
                    </form>
                </div>
                <div class="col-span-1 pt-2">
                    <img src="../../../assets/images/landwey-logo.png" class="w-20" />
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