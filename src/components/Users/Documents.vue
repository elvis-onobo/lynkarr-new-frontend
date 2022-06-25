<template>
  <div class="md:grid md:grid-cols-3 p-6 md:space-x-4 space-y-4 md:space-y-0">
    <div class="w-full">
      <form class="space-y-2 border border-gray-200 p-4 rounded-md">
        <p class="font-extrabold pb-2">Documents</p>
        <p class="text-xs">
          Without your CAC Document, you can only operate as a starter business
          with maximum operation limit of &#8358;200,000
        </p>
        <div>
          <label>CAC Document</label>
          <input
            type="file"
            class="p-2 w-full bg-gray-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <div>
          <label>Other Legal Document</label>
          <input
            type="file"
            class="p-2 w-full bg-gray-50 focus:outline-none rounded-md"
          />
        </div>

        <button type="button" class="p-2 rounded-md bg-green-500 text-white">
          Upload
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Documents",
  data() {
    return {};
  },
  methods: {},
};
</script>
