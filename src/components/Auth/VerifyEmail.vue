<template>
  <div class="grid place-items-center items-center min-h-screen">
    <div class="md:grid grid-cols-2 shadow-lg md:rounded-l-md rounded-t-md rounded-b-md ">
      <div class="grid bg-gradient-to-r from-lynkarr-blue to-lynkarr-green md:rounded-l-md rounded-t-md md:rounded-tr-none text-white items-center place-items-center md:p-10 p-4">
        <fa icon="envelope" class=" text-9xl" />
      </div>

      <form class="space-y-2 p-4 rounded-md">
        <p class="font-extrabold pb-2">Verify Your E-mail</p>
        <div>
          <input
            type="text"
            placeholder="Verification Code"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <router-link :to="{ name: 'bvn'}">
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
          Submit
        </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyEmail",
  data() {
    return {};
  },
  methods: {},
};
</script>
