<template>
  <div class="md:grid p-10 rounded-md border border-gray-200 m-5">
    <p class="font-extrabold text-center mb-4">Team</p>
    <table class="table-auto w-full text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Date Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y-2 divide-gray-200 divide-solid text-center">
        <tr>
          <td>Elvis Onobo</td>
          <td>Super Admin</td>
          <td>5 Oct, 2022</td>
          <td class="space-x-2">
            <button class="rounded-md bg-yellow-700 p-1 text-white">
              <fa icon="pen" /> Edit
            </button>
            <button class="rounded-md bg-red-800 p-1 text-white">
              <fa icon="trash" /> Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>Elvis Onobo</td>
          <td>Super Admin</td>
          <td>5 Oct, 2022</td>
          <td class="space-x-2">
            <button class="rounded-md bg-yellow-700 p-1 text-white">
              <fa icon="pen" /> Edit
            </button>
            <button class="rounded-md bg-red-800 p-1 text-white">
              <fa icon="trash" /> Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>Elvis Onobo</td>
          <td>Super Admin</td>
          <td>5 Oct, 2022</td>
          <td class="space-x-2">
            <button class="rounded-md bg-yellow-700 p-1 text-white">
              <fa icon="pen" /> Edit
            </button>
            <button class="rounded-md bg-red-800 p-1 text-white">
              <fa icon="trash" /> Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Transactions",
  data() {
    return {};
  },
  methods: {},
};
</script>