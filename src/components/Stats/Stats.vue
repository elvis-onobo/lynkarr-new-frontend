<template>
    <div class="col-span-10 flex bg-orange-50">
        <div class="grid grid-cols-12 gap-2 m-4">
            <div class="grid place-items-center v-screen max-w-full col-span-4 bg-gray-600 rounded-md drop-shadow-xl h-24">
                <div class="grid max-w-sm text-white justify-items-center">
                    <span class="text-3xl font-semibold">&#8358;11000.00</span>
                    <p>Account Balance</p>
                </div>
            </div>
            <div class="grid place-items-center v-screen max-w-sm col-span-4 bg-violet-700 rounded-md drop-shadow-xl h-24">
                <div class="grid max-w-sm text-white v-screen justify-items-center">
                    <span class="text-3xl font-semibold">&#8358;11000.00</span>
                    <p>Account Balance</p>
                </div>
            </div>
            <div class="grid place-items-center v-screen max-w-sm col-span-4 bg-green-700 rounded-md drop-shadow-xl h-24">
                <div class="grid max-w-sm text-white v-screen justify-items-center">
                    <span class="text-3xl font-semibold">&#8358;11000.00</span>
                    <p>Account Balance</p>
                </div>
            </div> 
            <div class="grid place-items-center v-screen col-span-6 rounded-md drop-shadow-xl h-full">
                <!-- Put long graph chart here -->
                <div class="h-full max-w-sm">
                    <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></pie-chart>
                </div>
            </div> 
            <div class="col-span-6 p-2 rounded-md drop-shadow-xl h-full outline outline-offset-1 outline-1">
                <table class="table-fixed">
                    <thead>
                        <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-gray-200 divide-solid">
                        <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        </tr>
                        <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        </tr>
                        <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stats',
    data(){
        return {
            count: 0
        }
    },
    methods:{
        showLogoutModal(){
            this.$swal.fire({
            text: "Are you sure to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Log me out!'
            })
        }
    }
}
</script>