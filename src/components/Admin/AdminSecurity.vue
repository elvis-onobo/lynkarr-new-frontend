<template>
  <div class="grid place-items-center space-y-4">
    <div class="md:col-span-3">
      <form class="flex space-x-2">
        <input
          type="text"
          class="bg-blue-magenta-100 p-2 rounded-md"
          placeholder="User E-mail"
        />
        <button class="p-2 bg-blue-magenta-900 text-white rounded-md hover:bg-gray-600">
          <fa icon="search" />
        </button>
      </form>
    </div>

    <div
      class="
        bg-blue-magenta-100
        md:outline
        outline-solid outline-blue-magenta-100
        h-full
        w-4/6
        rounded-md
        md:col-span-3 md:ml-0 md:mr-0
        p-4
        overflow-auto
      "
    >
      <p class="font-extrabold text-center mb-4">Security</p>
      <table class="table-auto w-full text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="divide-y-2 divide-blue-magenta-200 divide-solid text-center">
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>trx1ahnsj23n</td>
            <td class="space-x-2">
              <button
                class="p-2 bg-blue-magenta-900 text-white rounded-md hover:bg-gray-600"
                title="Add Staff"
              >
                Block
              </button>
            </td>
          </tr>
          <tr>
            <td>15 Jan, 2022</td>
            <td>&#8358;13000</td>
            <td>trx1ahnsj23n</td>
            <td class="space-x-2">
              <button
                class="p-2 bg-blue-magenta-900 text-white rounded-md hover:bg-gray-600"
                title="Add Staff"
              >
                Unblock
              </button>
            </td>
          </tr>
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>15 Jan, 2022</td>
            <td>&#8358;13000</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>12 Jan, 2022</td>
            <td>&#8358;2000</td>
            <td>trx1ahnsj23n</td>
          </tr>
          <tr>
            <td>15 Jan, 2022</td>
            <td>&#8358;13000</td>
            <td>trx1ahnsj23n</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>