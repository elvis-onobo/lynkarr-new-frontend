<template>
    <div class="col-span-9 p-4 bg-orange-50 rounded-sm drop-shadow-xl h-96 overflow-auto">
        <div class="grid grid-cols-4">
            <router-link to="/admin/create-user">
                <div class="col-span-2 drop-shadow-xl mb-2">
                    <button class="bg-gray-800 hover:bg-orange-600 rounded-sm p-2 text-white m-2">
                        <fa icon="user" /> Create User
                    </button>
                </div>
            </router-link>
        </div>
        <div class="col-span-8 p-4 rounded-md drop-shadow-xl h-full outline outline-offset-1 outline-1">
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody class="divide-y-2 divide-gray-200 divide-solid">
                    <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    <td>1961</td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    <td>1972</td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>