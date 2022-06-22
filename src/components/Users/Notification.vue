<template>
    <div class="grid grid-cols-3 mx-5">
        <div class="border border-gray-200 rounded-md shadow-lg">
            <form class="p-2 space-y-2">
                <p class="font-extrabold p-4">Notifications</p>
                <div class="grid grid-cols-4 p-4 hover:bg-gradient-to-r from-blue-50 to-green-50 rounded-md">
                    <div class="col-span-3">
                        <p>Login</p>
                        <p class="text-sm">When you log in</p>
                    </div>
                    <div class="place-items-center items-center">
                        <input type="checkbox" class="w-5 h-5 rounded-full text-green-600" checked />
                    </div>
                </div>
                <div class="grid grid-cols-4 p-4 hover:bg-gradient-to-r from-blue-50 to-green-50 rounded-md">
                    <div class="col-span-3">
                        <p>Withdrawal</p>
                        <p class="text-sm">When withdrawal is made</p>
                    </div>
                    <div class="place-items-center items-center">
                        <input type="checkbox" class="w-5 h-5 rounded-full text-green-600" checked />
                    </div>
                </div>
                <div class="grid grid-cols-4 p-4 hover:bg-gradient-to-r from-blue-50 to-green-50 rounded-md">
                    <div class="col-span-3">
                        <p>Deposit</p>
                        <p class="text-sm">When deposit is made</p>
                    </div>
                    <div class="place-items-center items-center">
                        <input type="checkbox" class="w-5 h-5 rounded-full text-green-600" checked />
                    </div>
                </div>
                <div class="grid grid-cols-4 p-4 hover:bg-gradient-to-r from-blue-50 to-green-50 rounded-md">
                    <div class="col-span-3">
                        <p>Settlement Received</p>
                        <p class="text-sm">When you receive settlement</p>
                    </div>
                    <div class="place-items-center items-center">
                        <input type="checkbox" class="w-5 h-5 rounded-full text-green-600" checked />
                    </div>
                </div>
                <div class="grid grid-cols-4 p-4 hover:bg-gradient-to-r from-blue-50 to-green-50 rounded-md">
                    <div class="col-span-3">
                        <p>Settlement Sent</p>
                        <p class="text-sm">When settlement is sent</p>
                    </div>
                    <div class="place-items-center items-center">
                        <input type="checkbox" class="w-5 h-5 rounded-full text-green-600" checked />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>