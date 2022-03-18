<template>
  <div class="grid place-items-center">
    <div class="md:grid md:grid-cols-4 gap-4">
      <div
        class="md:col-span-1 outline outline-solid outline-blue-50 rounded-md"
      >
        <form class="space-y-2 p-8">
          <div>
            <input
              type="text"
              placeholder="Search for user"
              class="p-2 bg-blue-50 rounded-md md:w-full"
            />
          </div>

          <div>
            <select class="bg-blue-50 p-2 md:w-full rounded-md">
              <option>Agent</option>
              <option>Accounts</option>
              <option>Manager</option>
            </select>
          </div>

          <button type="submit" class="p-2 bg-black rounded-md text-white">
            Add as Staff
          </button>
        </form>
      </div>
      <div
        class="
          bg-blue-50
          md:outline
          outline-solid outline-blue-50
          h-full
          rounded-md
          md:col-span-3 md:ml-0 md:mr-0
          p-4
          overflow-auto
        "
      >
        <table class="table-auto w-full text-center">
          <p class="font-extrabold text-center mb-4">Staff</p>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>E-mail</th>
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
  </div>
</template>

<script>
</script>