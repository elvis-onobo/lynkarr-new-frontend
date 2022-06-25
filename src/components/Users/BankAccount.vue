<template>
  <div class="md:grid md:grid-cols-4 p-6 md:space-x-4 space-y-4 md:space-y-0">
    <div class="w-full">
      <form class="space-y-2 border border-gray-200 p-4 rounded-md">
        <p class="font-extrabold pb-2">Add Bank Account</p>
        <div>
          <input
            type="text"
            placeholder="Account Number"
            class="p-2 w-full bg-gray-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <div>
          <select class="p-2 bg-gray-50 w-full rounded-md">
            <option value="">Select Bank</option>
            <option value="">Zenith Bank</option>
            <option value="">GT Bank</option>
          </select>
        </div>

        <button type="button" class="p-2 rounded-md bg-green-500 text-white">
          Update
        </button>
      </form>
    </div>

    <div
      class="
        grid
        border border-gray-200
        rounded-md
        space-y-2
        place-items-center
        w-full
        p-4
        md:p-0
      "
    >
      <div class="text-center space-y-2">
        <fa
          icon="bank"
          class="p-6 bg-gray-50 text-2xl border border-gray-200 rounded-full"
        />
        <p>Elvis Onobo</p>
        <p>2003560903</p>
        <p>Zenith Bank</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BnakAccount",
  data() {
    return {};
  },
  methods: {},
};
</script>
