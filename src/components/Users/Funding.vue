<template>
    <div class="md:grid md:grid-cols-2 p-6 md:space-x-4 space-y-4 md:space-y-0">
        <div class="border border-gray-200 rounded-md">
            <p class="text-xs p-2 text-center bg-gradient-to-r from-lynkarr-blue to-lynkarr-green text-white rounded-t-md">All deposits to this account will credit your wallet</p>
            <div class="flex md:grid md:grid-cols-6 space-y-2 space-x-2 md:space-x-0 items-center w-full p-4 divide-x-2 divide-gray-200">
                <div class="col-span-2 place-items-center">
                    <fa icon="wallet" class="p-6 bg-gray-50 text-2xl border border-gray-200 rounded-full" />
                </div>

                <div class="col-span-4 space-y-2 p-6">
                    <p>Elvis Onobo Bereprebofa</p>
                    <p>2003560903</p>
                    <p>Zenith Bank</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Funding",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
