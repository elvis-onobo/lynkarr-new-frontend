<template>
  <div
    class="
      md:grid
      grid-cols-12
      place-items-center
      gap-4
      m-7
      space-y-4
      md:space-y-0
      text-gray-700
    "
  >
    <div
      class="
        md:col-span-4
        rounded-md
        p-8 bg-gradient-to-r from-lynkarr-blue to-lynkarr-green text-white
        w-full
        grid
        place-items-center
      "
    >
      <p class="font-extrabold md:text-md text-md">&#8358;2,000,000.00</p>
      <p>Balance</p>
    </div>

    <div
      class="
        md:col-span-4
        rounded-md
        border border-gray-200
        p-8
        w-full
        grid
        place-items-center
      "
    >
      <p class="font-extrabold md:text-md text-md">&#8358;2,000,000.00</p>
      <p>Inflow</p>
    </div>

    <div
      class="
        md:col-span-4
        rounded-md
        border border-gray-200
        p-8
        w-full
        grid
        place-items-center
      "
    >
      <p class="font-extrabold md:text-md text-md">&#8358;2,000,000.00</p>
      <p>Outflow</p>
    </div>

    <div
      class="
        md:col-span-7
        p-5
        border border-gray-200
        rounded-md
        text-center
        w-full
      "
    >
      <line-chart
        :data="[
          ['2020-01-01', 44],
          ['2020-01-02', 23],
          ['2020-01-03', 66],
          ['2020-01-04', 12],
          ['2020-01-05', 92],
        ]"
      ></line-chart>
      <p class="font-extrabold">Money Sent</p>
    </div>

    <div
      class="
        md:col-span-5
        p-5
        border border-gray-200
        rounded-md
        text-center
        w-full
        h-full
      "
    >
      <table class="table-auto w-full">
        <p class="font-extrabold text-2xl">Recent Transactions</p>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody class="divide-y-2 divide-gray-200 divide-solid">
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>Deposit</td>
          </tr>
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>Deposit</td>
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
      <fa
        icon="arrow-right"
        class="bg-gray-100 text-white p-2 mt-2 rounded-full bg-gradient-to-r from-lynkarr-blue to-lynkarr-green"
        title="See Full List"
      />
    </div>
  </div>
</template>

<script>
import { useProgress } from "@marcoschulte/vue3-progress";

export default {
  name: "Dashboard",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    showLogoutModal() {
      const progress = this.$progress.start();
      this.$swal.fire({
        text: "Are you sure to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Log me out!",
      });
      progress.finish();
    },
  },
};
</script>