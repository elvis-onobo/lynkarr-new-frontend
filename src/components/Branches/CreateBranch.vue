<template>
  <div
    class="
      max-w-sm
      col-span-5
      p-4
      bg-orange-50
      rounded-sm
      drop-shadow-xl
      h-full
      outline outline-offset-1 outline-1
    "
  >
    <div class="grid grid-cols-1 p-4 divide-y-2 divide-gray-200 divide-solid">
      <p class="text-3xl font-semibold"><fa icon="church" /> Create a Branch</p>
      <form class="" @submit.prevent="createBranch">
        <div class="mt-2">
          <input
            type="text"
            v-model.lazy="centerName"
            class="rounded-sm p-2"
            placeholder="Center Name"
            autofocus
          />
        </div>
        <div class="mt-2">
          <input
            type="text"
            v-model.lazy="address"
            class="rounded-sm p-2"
            placeholder="Address"
          />
        </div>
        <div class="mt-2">
          <input
            type="text"
            v-model.lazy="residentPastor"
            class="rounded-sm p-2"
            placeholder="Resident Pastor"
          />
        </div>
        <div class="mt-2">
          <input type="file" class="rounded-sm p-2" placeholder="htt" />
        </div>
        <button
          class="bg-gray-800 hover:bg-gray-600 rounded-sm p-2 text-white mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../axios-config";

export default {
  name: "CreateBranch",
  data() {
    return {
      centerName: "",
      address: "",
      residentPastor:"",
      imageUrl: ""
    };
  },
  methods: {
    async createBranch() {
        try {
            const res = await HTTP.post("api/create-church-center", {
              centerName: this.centerName,
              address: this.address,
              residentPastor: this.residentPastor,
              imageUrl: this.imageUrl,
            })
            
            this.$router.push({ name: 'branches'})
        } catch (error) {
            console.log('>>>>>>>>>>> ', error)
        }
    },
  },
};
</script>