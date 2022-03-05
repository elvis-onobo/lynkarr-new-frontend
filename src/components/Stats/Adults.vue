
<template>
  <div class="col-span-10  bg-orange-50">
    <div class="grid grid-cols-1">
      <div class="m-2 p-2" @submit.prevent="filterResults">
        <form class="flex">
          <input type="date" class="form-control" v-model="eventDate" />
          <select class="form-select p-2">
            <option value="" disabled>Select Service</option>
            <option value="">First Service</option>
          </select>
          <button
            class="bg-gray-800 hover:bg-gray-600 rounded-sm p-2 text-white"
          >Filter</button>
        </form>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-1 m-4">
      <div class="h-full max-w-full grid place-items-center">
        <pie-chart
          :data="[
            ['Male', teenagers.male],
            ['Female', teenagers.female],
          ]"
        ></pie-chart>
        <p>Teenagers</p>
      </div>
      <div class="h-full max-w-full grid place-items-center">
        <pie-chart
          :data="[
            ['Male', adults.male],
            ['Female', adults.female],
          ]"
        ></pie-chart>
        <p>Adults</p>
      </div>
      <div class="h-full max-w-full grid place-items-center">
        <pie-chart
          :data="[
            ['Male', alterCall.male],
            ['Female', alterCall.female],
          ]"
        ></pie-chart>
        <p>Alter Call</p>
      </div>
      <div class="h-full max-w-full grid place-items-center">
        <pie-chart
          :data="[
            ['Male', converts.male],
            ['Female', converts.female],
          ]"
        ></pie-chart>
        <p>Converts</p>
      </div>
      <div class="h-full max-w-full grid place-items-center">
        <pie-chart
          :data="[
            ['Male', eLibrary.male],
            ['Female', eLibrary.female],
          ]"
        ></pie-chart>
        <p>E-library</p>
      </div>
      <div class="h-full max-w-full grid place-items-center">
        <pie-chart
          :data="[
            ['Male', firstTimers.male],
            ['Female', firstTimers.female],
          ]"
        ></pie-chart>
        <p>First Timers</p>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../axios-config";

export default {
  name: "Adults",
  data() {
    return {
      count: 0,
      churchId: 1,
      eventDate: '',
      teenagers: {},
      adults: {},
      alterCall: {},
      converts: {},
      eLibrary: {},
      firstTimers: {},
    };
  },
  methods: {
    async filterResults() {
      try {
        const res = await HTTP.get(
          `api/total-stats?churchId=${this.churchId}&eventDate=${this.eventDate}`
        );

      if (res.status === 200) {
        // Stats
        const { teenagers } = res.data.data;
        const { adults } = res.data.data;
        const { alterCall } = res.data.data;
        const { converts } = res.data.data;
        const { eLibrary } = res.data.data;
        const { firstTimers } = res.data.data;

        this.teenagers = teenagers;
        this.adults = adults;
        this.alterCall = alterCall;
        this.converts = converts;
        this.eLibrary = eLibrary;
        this.firstTimers = firstTimers;
      }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
  },
  async mounted() {
    try {
      const res = await HTTP.get(
        `api/total-stats?churchId=${this.churchId}&eventDate=${this.eventDate}`
      );

      if (res.status === 200) {
        // Stats
        const { teenagers } = res.data.data;
        const { adults } = res.data.data;
        const { alterCall } = res.data.data;
        const { converts } = res.data.data;
        const { eLibrary } = res.data.data;
        const { firstTimers } = res.data.data;

        this.teenagers = teenagers;
        this.adults = adults;
        this.alterCall = alterCall;
        this.converts = converts;
        this.eLibrary = eLibrary;
        this.firstTimers = firstTimers;
      }
    } catch (error) {
      this.$toast.error(error.message);
    }
  },
};
</script>