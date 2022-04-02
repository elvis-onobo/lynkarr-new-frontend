<template>
  <div
    class="
      md:grid
      place-items-center
      m-5
    "
  >
    <form class="md:grid space-y-4 place-items-center">
        <p>Withdraw</p>
        <div class="w-full">
            <select class="outline outline-blue-magenta-900 p-4 rounded-md text-2xl md:font-extrabold text-center w-full">
                <option disabled>Select Account</option>
                <option value="">Zenith Bank</option>
                <option value="">FCMB</option>
            </select>
        </div>

        <div>
            <input type="text" class="outline outline-blue-magenta-900 p-4 rounded-md text-2xl md:font-extrabold text-center" value="23000" placeholder="Amount" />
        </div>

        <button type="submit" class="p-2 bg-blue-magenta-900 text-white rounded-md md:w-full hover:bg-slate-400">Withdraw</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Change-Money",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>