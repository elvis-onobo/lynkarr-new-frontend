<template>
  <div class="md:grid p-10 rounded-md border border-gray-200 m-5">
    <table class="table-auto w-full text-center">
      <p class="font-extrabold text-center mb-4">Transactions</p>
        <select class="w-40 p-4 m-2 text-right">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
        </select>

      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Reference</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody class="divide-y-2 divide-gray-200 divide-solid text-center">
        <tr>
          <td>12 Jan, 2022</td>
          <td>&#8358;2000</td>
          <td>Deposit</td>
          <td>trx1ahnsj23n</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>15 Jan, 2022</td>
          <td>&#8358;13000</td>
          <td>Withdrawal</td>
          <td>trx1ahnsj23n</td>
          <td>Failed</td>
        </tr>
        <tr>
          <td>12 Jan, 2022</td>
          <td>&#8358;2000</td>
          <td>Deposit</td>
          <td>trx1ahnsj23n</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>15 Jan, 2022</td>
          <td>&#8358;13000</td>
          <td>Withdrawal</td>
          <td>trx1ahnsj23n</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>12 Jan, 2022</td>
          <td>&#8358;2000</td>
          <td>Deposit</td>
          <td>trx1ahnsj23n</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>15 Jan, 2022</td>
          <td>&#8358;13000</td>
          <td>Withdrawal</td>
          <td>trx1ahnsj23n</td>
          <td>Success</td>
        </tr>
      </tbody>
    </table>
    <div class="grid place-items-center mt-2">
        <div class="flex space-x-2">
            <button class="bg-gradient-to-r from-lynkarr-blue to-lynkarr-green p-2 rounded-md text-white">Prev</button>
            <button class="bg-gradient-to-r from-lynkarr-blue to-lynkarr-green p-2 rounded-md text-white">Next</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transactions",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>