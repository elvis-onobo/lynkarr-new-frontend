<template>
  <div class="grid place-items-center md:gap-4">
    <div
      class="
        md:outline
        outline-solid 
        outline-blue-magenta-900
        h-full
        rounded-md
        md:col-span-3
        md:ml-0 md:mr-0
        p-8
        overflow-auto
        w-4/6
        space-y-2
      "
    >
      <form class="md:flex md:space-x-2 md:space-y-0 space-y-2">
        <div class="w-full">
          <input type="text" class="outline outline-blue-magenta-900 rounded-md p-2 w-full" placeholder="Account number" autofocus />
        </div>
        <div class="w-full">
          <select class="outline outline-blue-magenta-900 rounded-md p-2 w-full">
              <option>Select Bank</option>
              <option value="" >Zenith Bank</option>
          </select>
        </div>
        <button class="bg-blue-magenta-900 hover:bg-gray-400 rounded-md text-white p-2">Add</button>
      </form>

      <table class="table-auto w-full text-center">
          <p class="font-extrabold text-center mb-4">Bank Accounts</p>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Bank</th>
                  <th>Account Number</th>
              </tr>
          </thead>
        <tbody class="divide-y-2 divide-gray-200 divide-solid text-center">
          <tr>
            <td>Elvis Sunday Onobo</td>
            <td>Zenith Bank</td>
            <td>2003560903</td>
          </tr>
          <tr>
            <td>Elvis Sunday Onobo</td>
            <td>Zenith Bank</td>
            <td>2003560903</td>
          </tr>
          <tr>
            <td>Elvis Sunday Onobo</td>
            <td>Zenith Bank</td>
            <td>2003560903</td>
          </tr>
          <tr>
            <td>Elvis Sunday Onobo</td>
            <td>Zenith Bank</td>
            <td>2003560903</td>
          </tr>
          <tr>
            <td>Elvis Sunday Onobo</td>
            <td>Zenith Bank</td>
            <td>2003560903</td>
          </tr>
          <tr>
            <td>Elvis Sunday Onobo</td>
            <td>Zenith Bank</td>
            <td>2003560903</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>