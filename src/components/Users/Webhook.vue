<template>
  <div class="md:grid md:grid-cols-3 p-6 md:space-x-4 space-y-4 md:space-y-0">
    <div class="w-full">
      <form class="space-y-2 border border-gray-200 p-4 rounded-md">
        <p class="font-extrabold pb-2">Update Webhook</p>
        <div>
          <input
            type="text"
            placeholder="Webhook URL"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <button
          type="button"
          class="
            p-2
            rounded-md
            bg-gradient-to-r
            from-lynkarr-blue
            to-lynkarr-green
            text-white
          "
        >
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Webhook",
  data() {
    return {};
  },
  methods: {},
};
</script>
