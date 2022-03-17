<template>
  <div class="md:grid grid-cols-4 md:gap-4">
    <div class="col-span-1">
      <div class="w-full p-8 md:p-0">
        <div class="rounded-md bg-blue-50 p-8 space-y-2">
          <p class="font-extrabold">Notifications</p>
          <hr />

          <p>Login <input type="checkbox" role="switch" class="default:ring-2" checked /></p>
          <p>Deposit <input type="checkbox" role="switch" class="default:ring-2" checked /></p>
          <p>Company Updates <input type="checkbox" role="switch" class="default:ring-2" checked /></p>
        </div>
      </div>

      <!-- <div class="md:outline outline-solid outline-blue-50 rounded-md w-full md:p-0">
        <form class="space-y-2 p-8">
          <p class="font-extrabold">Add Withdrawal Account</p>
          <div>
            <input
              type="text"
              placeholder="Account Number"
              class="p-2 bg-blue-50 w-full"
            />
          </div>
          <div>
            <select class="bg-blue-50 p-2 w-full">
              <option value="1">Access Bank</option>
              <option value="1">Zenith Bank</option>
              <option value="1">Wema Bank</option>
            </select>
          </div>
          <button class="p-2 bg-black rounded-md text-white">Submit</button>
        </form>
      </div> -->
    </div>

    <div
      class="
        bg-blue-50
        md:outline
        outline-solid outline-blue-50
        h-full
        md:w-full
        rounded-md
        md:col-span-3
        ml-8
        mr-8
        md:ml-0 md:mr-0
        p-8
        overflow-auto
      "
    >
      <table class="table-auto w-full text-center">
          <p class="font-extrabold text-center mb-4">Transactions</p>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Reference</th>
              </tr>
          </thead>
        <tbody class="divide-y-2 divide-gray-200 divide-solid text-center">
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>Deposit</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>15 Jan, 2022</td>
            <td>&#8358;13000</td>
            <td>Withdrawal</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>Deposit</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>15 Jan, 2022</td>
            <td>&#8358;13000</td>
            <td>Withdrawal</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>Deposit</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>15 Jan, 2022</td>
            <td>&#8358;13000</td>
            <td>Withdrawal</td>
            <td>trx1ahnsj23n</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>