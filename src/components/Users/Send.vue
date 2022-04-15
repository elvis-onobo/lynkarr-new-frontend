<template>
  <div class="md:grid place-items-center m-5">
    <form
      class="md:grid space-y-4 place-items-center"
      @submit.prevent="showChargesModal"
    >
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
          autofocus
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
          @change="setAccount(selected)"
          v-model="selected"
        >
          <option>Select Account</option>
          <option value="add_account">
            Add Account
          </option>
          <option value="zenith">Zenith Bank</option>
          <option value="fcmb">FCMB</option>
        </select>
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
  name: "Send",
  data() {
    return {
      selected: "",
    };
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
    setAccount(value) {
      if (value == "add_account") {
        console.log('logged >>>>>>', value)
        this.$swal.fire({
          text: "The charges below apply. Payment Processor = 3.8%(1,111), Betarr = 1%(200)",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Yes, Send!",
        })
      }else {
        console.log('logged 2  >>>>>>')

        this.selected = value
      }
    },
  },
};
</script>
