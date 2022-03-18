<template>
    <div class="md:grid grid-cols-8 place-items-center gap-4 m-5 space-y-4 md:space-y-0">
      <div class="col-span-5 p-5 bg-blue-50 rounded-md text-center w-full">
        <line-chart
          :data="[
            ['2020-01-01', 44],
            ['2020-01-02', 23],
            ['2020-01-03', 66],
            ['2020-01-04', 12],
            ['2020-01-05', 92],
          ]"
        ></line-chart>
        <p>Payments</p>
      </div>

      <div class="col-span-3 p-5 bg-blue-50 rounded-md text-center w-full h-full">
          <table class="table-auto w-full">
              <tbody class="divide-y-2 divide-gray-200 divide-solid">
                <tr>
                  <td>12 Jan, 2022</td>
                  <td>&#8358;2000</td>
                  <td>Deposit</td>
                </tr>
                <tr>
                  <td>15 Jan, 2022</td>
                  <td>&#8358;13000</td>
                  <td>Withdrawal</td>
                </tr>
                <tr>
                  <td>12 Jan, 2022</td>
                  <td>&#8358;2000</td>
                  <td>Deposit</td>
                </tr>
                <tr>
                  <td>15 Jan, 2022</td>
                  <td>&#8358;13000</td>
                  <td>Withdrawal</td>
                </tr>
                <tr>
                  <td>12 Jan, 2022</td>
                  <td>&#8358;2000</td>
                  <td>Deposit</td>
                </tr>
                <tr>
                  <td>15 Jan, 2022</td>
                  <td>&#8358;13000</td>
                  <td>Withdrawal</td>
                </tr>
              </tbody>
          </table>
          <fa icon="arrow-right"
            class="bg-blue-300 text-white p-2 mt-2 rounded-full" title="See Full List"
          />
      </div>
    </div>
</template>

<script>
import {useProgress} from '@marcoschulte/vue3-progress';

export default {
  name: "Dashboard",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    showLogoutModal() {
      const progress = this.$progress.start()
      this.$swal.fire({
        text: "Are you sure to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Log me out!",
      });
      progress.finish()
    },
  },
};
</script>