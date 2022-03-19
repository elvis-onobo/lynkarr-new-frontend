<template>
  <div class="grid place-items-center space-y-4">
    <div class="md:col-span-3">
      <form class="flex space-x-2">
        <input
          type="text"
          class="bg-blue-50 p-2 rounded-md"
          placeholder="User E-mail"
        />
        <button class="p-2 bg-black text-white rounded-md hover:bg-gray-600">
          <fa icon="search" />
        </button>
      </form>
    </div>

    <div
      class="
        bg-blue-50
        md:outline
        outline-solid outline-blue-50
        h-full
        w-4/6
        rounded-md
        md:col-span-3 md:ml-0 md:mr-0
        p-4
        overflow-auto
      "
    >
      <p class="font-extrabold text-center mb-4">Your Staff</p>
      <table class="table-auto w-full text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="divide-y-2 divide-gray-200 divide-solid text-center">
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>Deposit</td>
            <td>trx1ahnsj23n</td>
            <td class="space-x-2">
              <button
                class="p-2 bg-black text-white rounded-md hover:bg-gray-600"
                title="Add Staff"
              >
                <fa icon="pen" />
              </button>
              <button
                class="p-2 bg-black text-white rounded-md hover:bg-gray-600"
                title="Remove Staff"
              >
                <fa icon="trash" />
              </button>
            </td>
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