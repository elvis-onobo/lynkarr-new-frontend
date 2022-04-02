<template>
  <div
    class="
      md:grid
      place-items-center
      m-5
    "
  >
    <form class="md:grid space-y-4 place-items-center">
        <p class="font-extrabold">Convert your money</p>
        <div>
            <input type="text" class="outline outline-blue-magenta-900 p-8 rounded-md text-2xl md:font-extrabold text-center" value="50" placeholder="Amount in Dollars" />
        </div>

        <fa icon="arrow-down" class="rounded-full bg-blue-magenta-900 text-white p-4" />

        <div>
            <input type="text" class="outline outline-blue-magenta-900 p-8 rounded-md text-2xl md:font-extrabold text-center" value="23000" placeholder="Amount in Naira" />
        </div>

        <button type="submit" class="p-2 bg-blue-magenta-900 text-white rounded-md md:w-full hover:bg-slate-400">Convert</button>
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