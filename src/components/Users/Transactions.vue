<template>
  <div class="md:grid p-10 rounded-md border border-gray-200 m-5">
    <table class="table-auto w-full text-center">
      <p class="font-extrabold text-center mb-4">Transactions</p>
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