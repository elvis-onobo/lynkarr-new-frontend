<template>
  <div class="md:grid grid-cols-3 m-5 rounded-md space-x-2">
    <div class="border border-gray-200 p-2 rounded-md space-y-2">
      <p class="p-2 rounded-md bg-green-500 text-white">Test Keys</p>
      <div class="space-y-2">
        <div class="space-y-1">
          <label>Secret Key</label>
          <div class="flex space-x-2">
            <input
              type="text"
              value="test_sk_1x00juy38ihiduhu2dhud"
              class="border border-gray-200 p-1 focus:outline-none rounded-md"
            />
            <button
              type="button"
              class="bg-green-500 p-1 rounded-md text-white"
            >
              <fa icon="copy" class="text-white" /> Copy
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <div class="space-y-1">
          <label>Public Key</label>
          <div class="flex space-x-2">
            <input
              type="text"
              value="test_pk_1x00juy38ihiduhu2dhud"
              class="border border-gray-200 p-1 focus:outline-none rounded-md"
            />
            <button
              type="button"
              class="bg-green-500 p-1 rounded-md text-white"
            >
              <fa icon="copy" class="text-white" /> Copy
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="border border-gray-200 p-2 rounded-md space-y-2">
      <p class="p-2 rounded-md bg-green-500 text-white">Live Keys</p>
      <div class="space-y-2">
        <div class="space-y-1">
          <label>Secret Key</label>
          <div class="flex space-x-2">
            <input
              type="text"
              value="test_sk_1x00juy38ihiduhu2dhud"
              class="border border-gray-200 p-1 focus:outline-none rounded-md"
            />
            <button
              type="button"
              class="bg-green-500 p-1 rounded-md text-white"
            >
              <fa icon="copy" class="text-white" /> Copy
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <div class="space-y-1">
          <label>Public Key</label>
          <div class="flex space-x-2">
            <input
              type="text"
              value="test_pk_1x00juy38ihiduhu2dhud"
              class="border border-gray-200 p-1 focus:outline-none rounded-md"
            />
            <button
              type="button"
              class="bg-green-500 p-1 rounded-md text-white"
            >
              <fa icon="copy" class="text-white" /> Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "APIkeys",
  data() {
    return {};
  },
  methods: {},
};
</script>