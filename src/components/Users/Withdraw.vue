<template>
  <div class="md:grid md:grid-cols-3 p-6 md:space-x-4 space-y-4 md:space-y-0">
    <div class="w-full">
      <form class="space-y-2 border border-gray-200 p-4 rounded-md">
        <p class="font-extrabold pb-2">Withdraw</p>
        <div>
          <input
            type="text"
            placeholder="Amount"
            class="p-2 w-full bg-gray-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Purpose"
            class="p-2 w-full bg-gray-50 focus:outline-none rounded-md"
          />
        </div>

        <button type="button" class="p-2 rounded-md bg-green-500 text-white">
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Withdraw",
  data() {
    return {};
  },
  methods: {},
};
</script>
