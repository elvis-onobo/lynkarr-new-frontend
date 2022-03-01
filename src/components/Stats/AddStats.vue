<template>
  <div
    class="
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
      <p class="text-3xl font-semibold"><fa icon="plus" /> Add Stats</p>
      <form class="" @submit.prevent="addStats">
        <div class="mt-2">
          <input
            type="text"
            class="rounded-sm p-2"
            placeholder="Male Population"
            v-model="male"
          />
        </div>
        <div class="mt-2">
          <input
            type="text"
            class="rounded-sm p-2"
            placeholder="Female Population"
            v-model="female"
          />
        </div>
        <div class="mt-2">
          <select class="form-select p-2" v-model="selectedDemography">
            <option disabled>Select a Demography</option>
            <option
              :value="value"
              v-for="(value, key) in demography"
              :key="key"
            >
              {{ key }}
            </option>
          </select>
        </div>
        <div class="mt-2" v-if="selectedDemography === 'children'">
          <select class="form-select p-2" v-model="selectedAgeRange">
            <option disabled>Select age range</option>
            <option :value="value" v-for="(value, key) in ageRange" :key="key">
              {{ key }}
            </option>
          </select>
        </div>
        <div class="mt-2">
          <select class="form-select p-2" v-model="serviceType">
            <option disabled>Select a Service Type</option>
            <option
              :value="value"
              v-for="(value, key) in churchServices"
              :key="key"
            >
              {{ key }}
            </option>
          </select>
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
  name: "AddStats",
  data() {
    return {
      male: "",
      female: "",
      churchServices: {},
      demography: {},
      serviceType: "",
      selectedDemography: "",
      ageRange: {},
      selectedAgeRange: "",
    };
  },
  methods: {
    async getDemography() {
      try {
        const res = await HTTP.get(`api/demography`);

        if (res.status === 200) {
          this.demography = res.data.data;
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async getChurchServices() {
      try {
        const res = await HTTP.get(`api/church-services`);

        if (res.status === 200) {
          this.churchServices = res.data.data;
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async getChildrenAgeRange() {
      try {
        const res = await HTTP.get(`api/children-age-range`);

        if (res.status === 200) {
          this.ageRange = res.data.data;
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async addStats() {
      try {
        const res = await HTTP.post("api/attendance", {
          male: this.male,
          female: this.female,
          ageRange: this.selectedAgeRange,
          demography: this.selectedDemography,
          serviceType: this.serviceType,
        });

        if (res.status === 200) {
          this.ageRange = res.data.data;
          this.$toast.success(`Attendance record added successfully!`);
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
  },
  async mounted() {
    try {
      this.getDemography();
      this.getChurchServices();
      this.getChildrenAgeRange();
    } catch (error) {
      this.$toast.error(error.message);
    }
  },
};
</script>