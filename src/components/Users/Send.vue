<template>
  <div class="md:grid place-items-center m-5">
    <form class="md:grid space-y-4 place-items-center" @submit.prevent="showChargesModal">
      <p class="font-extrabold">You Send</p>
      <div>
        <input
          type="text"
          class="
            outline outline-blue-magenta-900
            p-2
            rounded-md
            text-2xl
            md:font-extrabold
            text-center
          "
          value="50"
          placeholder="Amount in Dollars"
        />
      </div>

      <div class="space-y-2">
        <p class="font-extrabold text-center">They get</p>
        <input
          type="text"
          class="
            outline outline-blue-magenta-900
            p-2
            rounded-md
            text-2xl
            md:font-extrabold
            text-center
          "
          value="23000"
          placeholder="Amount in Naira"
        />
      </div>

      <div class="w-full">
        <select
          class="
            outline outline-blue-magenta-900
            p-2
            rounded-md
            text-2xl
            md:font-extrabold
            text-center
            w-full
          "
        >
          <option>Select Bank</option>
          <option value="">Zenith Bank</option>
          <option value="">FCMB</option>
        </select>
      </div>

      <div class="space-y-2 w-full">
        <p class="font-extrabold text-center">Account Number</p>
        <input
          type="text"
          class="
            outline outline-blue-magenta-900
            p-2
            rounded-md
            md:font-extrabold
            text-center
            w-full
          "
          placeholder="Recipient account"
        />
      </div>

      <button
        type="submit"
        class="
          p-2
          bg-blue-magenta-900
          text-white
          rounded-md
          md:w-full
          hover:bg-slate-400
        "
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Change-Money",
  data() {
    return {};
  },
  methods: {
    showChargesModal() {
      this.$swal
        .fire({
          text: "The charges below apply. Payment Processor = 3.8%(1,111), Betarr = 1%(200)",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Yes, Send!",
        })
        .then((result) => {
          if (result.value) {
            // trigger Flutterwave payment modal
            this.logoutUser();
          }
        });
    },
  },
};
</script>
