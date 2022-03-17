<template>
  <div class="md:grid grid-cols-4 md:gap-4">
    <div class="col-span-1 space-y-2">
      <div class="rounded-md w-full p-8 md:p-0">
        <div class="bg-blue-50 p-8 space-y-2">
          <p class="font-extrabold">Your Deposit Account</p>
          <hr />
          <p>Wema Bank</p>
          <p>1122334455</p>
          <p>AssetifyMe/Elvis Onobo</p>
        </div>
      </div>

      <div class="md:outline outline-solid outline-blue-50 rounded-md w-full md:p-0">
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
      </div>
    </div>

    <div class="md:outline outline-solid outline-blue-50 h-full md:w-full rounded-md md:col-span-3">
        <div class="md:grid md:grid-cols-3">
            <div class="bg-blue-50 rounded-md m-6 p-8">
                <p>Zenith Bank</p>
                <p>2003560903</p>
                <p>Elvis Onobo</p>
                <button class="p-2 bg-black rounded-md text-white">
                <fa icon="trash" />
                </button>
            </div>

            <div class="bg-blue-50 rounded-md m-6 p-8">
                <p>Zenith Bank</p>
                <p>2003560903</p>
                <p>Elvis Onobo</p>
                <button class="p-2 bg-black rounded-md text-white">
                <fa icon="trash" />
                </button>
            </div>

            <div class="bg-blue-50 rounded-md m-6 p-8">
                <p>Zenith Bank</p>
                <p>2003560903</p>
                <p>Elvis Onobo</p>
                <button class="p-2 bg-black rounded-md text-white">
                <fa icon="trash" />
                </button>
            </div>

           <div class="bg-blue-50 rounded-md m-6 p-8">
                <p>Zenith Bank</p>
                <p>2003560903</p>
                <p>Elvis Onobo</p>
                <button class="p-2 bg-black rounded-md text-white">
                <fa icon="trash" />
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>