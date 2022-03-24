<template>
  <div class="md:grid place-items-center gap-1">
    <div class="md:grid grid-cols-3 space-x-4 space-y-4 md:space-y-0">
      <div class="space-y-2 col-span-1">
        <div
          class="
            bg-blue-magenta-100
            rounded-md
            p-8
            text-center
            md:w-full md:h-32
            m-8
            md:m-0
          "
        >
          <p class="font-extrabold">Wallet Balance</p>
          <p class="text-extrabold text-2xl">&#8358;13,000,000.00</p>
        </div>

        <div>
          <div
            class="outline outline-solid outline-blue-magenta-100 rounded-md m-4 md:m-0"
          >
            <form class="space-y-2 p-8">
              <div>
                <input
                  type="text"
                  class="bg-blue-magenta-100 p-2 rounded-md w-full"
                  placeholder="Amount"
                  autofocus
                />
              </div>

              <div>
                <input
                  type="text"
                  class="bg-blue-magenta-100 p-2 rounded-md w-full"
                  placeholder="Purpose of Withdrawal"
                />
              </div>

              <div>
                <select class="bg-blue-magenta-100 p-2 w-full">
                  <option value="" disabled>Select Account</option>
                  <option value="">Access Bank</option>
                  <option value="">Zenith Bank</option>
                </select>
              </div>

              <button type="submit" class="p-2 bg-blue-magenta-900 rounded-md text-white">
                Withdraw
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="md:col-span-2 md:grid md:grid-cols-2 space-x-2 space-y-2">
        <div class="col-span-1 m-4 md:m-0">
          <div class="outline outline-solid outline-blue-magenta-100 rounded-md">
            <form class="space-y-2 p-8">
              <div>
                <input
                  type="text"
                  class="bg-blue-magenta-100 p-2 rounded-md w-full"
                  placeholder="Account Number"
                />
              </div>

              <div>
                <select class="bg-blue-magenta-100 p-2 w-full">
                  <option value="">Access Bank</option>
                  <option value="">Zenith Bank</option>
                </select>
              </div>

              <button type="submit" class="p-2 bg-blue-magenta-900 rounded-md text-white">
                Add Withdrawal Account
              </button>
            </form>
          </div>
        </div>

        <div
          class="
            bg-blue-magenta-100
            rounded-md
            p-8
            text-center
            md:h-40
            m-8
            md:m-0
            col-span-1
          "
        >
          <p class="font-extrabold">Elvis Onobo</p>
          <p class="">Zenith Bank</p>
          <p class="">2003560903</p>
        </div>

<div
          class="
            bg-blue-magenta-100
            rounded-md
            p-8
            text-center
            md:h-40
            m-8
            md:m-0
            col-span-1
          "
        >
          <p class="font-extrabold">Elvis Onobo</p>
          <p class="">Zenith Bank</p>
          <p class="">2003560903</p>
        </div>

        <div
          class="
            bg-blue-magenta-100
            rounded-md
            p-8
            text-center
            md:h-40
            m-8
            md:m-0
            col-span-1
          "
        >
          <p class="font-extrabold">Elvis Onobo</p>
          <p class="">Zenith Bank</p>
          <p class="">2003560903</p>
        </div>

        <div
          class="
            bg-blue-magenta-100
            rounded-md
            p-8
            text-center
            md:h-40
            m-8
            md:m-0
            col-span-1
          "
        >
          <p class="font-extrabold">Elvis Onobo</p>
          <p class="">Zenith Bank</p>
          <p class="">2003560903</p>
        </div>

        <div
          class="
            bg-blue-magenta-100
            rounded-md
            p-8
            text-center
            md:h-40
            m-8
            md:m-0
            col-span-1
          "
        >
          <p class="font-extrabold">Elvis Onobo</p>
          <p class="">Zenith Bank</p>
          <p class="">2003560903</p>
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