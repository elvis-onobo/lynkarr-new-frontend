<template>
  <div class="md:grid md:grid-cols-4 p-6 md:space-x-4 space-y-4 md:space-y-0">
    <div class="col-span-1">
      <form class="space-y-2 border border-gray-200 p-4 rounded-md">
        <p class="font-extrabold pb-2">Add Role</p>
        <div>
          <input
            type="text"
            placeholder="Role"
            class="p-2 w-full bg-green-50 focus:outline-none rounded-md"
            autofocus
          />
        </div>

        <div>
          <label for="">API Keys</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <div>
          <label for="">Withdraw</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <div>
          <label for="">Webhook</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <div>
          <label for="">Team</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <div>
          <label for="">Roles</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <div>
          <label for="">Notifications</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <div>
          <label for="">Transactions</label>
          <select class="w-full p-2 m-2 bg-green-50 rounded-md">
            <option value="">Select Category</option>
            <option value="">Inflow</option>
            <option value="">Outflow</option>
          </select>
        </div>

        <button
          type="button"
          class="
            p-2
            rounded-md
            bg-gradient-to-r
            from-lynkarr-blue
            to-lynkarr-green
            text-white
          "
        >
          Add Role
        </button>
      </form>
    </div>

    <div
      class="col-span-3 border border-gray-200 rounded-md space-y-2 w-full p-4"
    >
      <p class="text-center p-2 font-extrabold">Roles</p>
      <div class="text-center space-y-2">
        <table class="table-auto w-full text-center">
          <thead>
            <tr>
              <th>Role</th>
              <th>Permissions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="divide-y-2 divide-gray-200 divide-solid text-center">
            <tr>
              <td>12 Jan, 2022</td>
              <td>&#8358;2000</td>
              <td class="space-x-2 space-y-2 md:space-y-0">
                <button class="p-1 bg-green-600 rounded-md text-white">
                  <fa icon="pen" />
                </button>
                <button class="p-1 bg-red-600 rounded-md text-white">
                  <fa icon="trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>15 Jan, 2022</td>
              <td>&#8358;13000</td>
            </tr>
            <tr>
              <td>12 Jan, 2022</td>
              <td>&#8358;2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roles",
  data() {
    return {};
  },
  methods: {},
};
</script>
