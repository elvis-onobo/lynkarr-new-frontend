<template>
  <div class="grid place-items-center items-center min-h-screen">
    <div
      class="
        md:grid
        grid-cols-2
        shadow-lg
        md:rounded-l-md
        rounded-t-md rounded-b-md
      "
    >
      <div
        class="
          grid
          bg-gradient-to-r
          from-lynkarr-blue
          to-lynkarr-green
          md:rounded-l-md
          rounded-t-md
          md:rounded-tr-none
          text-white
          items-center
          place-items-center
          md:p-10
          p-4
        "
      >
        <fa icon="briefcase" class="text-9xl" />
      </div>

      <form class="space-y-2 p-4 rounded-md">
        <p class="font-extrabold pb-2">Setup Business</p>
        <div>
          <input
            type="text"
            placeholder="Name"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Short Name"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="E-mail"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
          />
        </div>


        <div>
            <select class="w-full p-2 bg-green-50 focus:outline-none rounded-md">
                <option class="">Select Industry</option>
                <option class="">Food</option>
                <option class="">Finance</option>
            </select>
        </div>

        <div>
          <input
            type="file"
            placeholder="CAC"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
            title="Upload CAC Document"
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
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BVN",
  data() {
    return {};
  },
  methods: {},
};
</script>
