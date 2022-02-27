<template>
    <div>
        <nav class="">
            <div class="grid grid-flow-row grid-cols-8">
                <div class="col-span-1">
                    <img src="../assets/images/tcn-logono-bg.png" alt="The Covenant Nation Logo" class="w-28 p-2" />
                </div>
                <div class="col-span-6 flex v-screen place-items-center justify-items-center justify-self-center">
                    <p >Dashboard</p>
                </div>
                <div class=" flex v-screen place-items-center">
                    <div>
                        <p class="mr-1">Super Admin</p>
                    </div>
                    <div>
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </nav>
        <div class="grid grid-cols-12 gap-4">
            <div class="p-2 col-span-2">
                <p class="p-4 font-bold hover:bg-orange-100">Hi, Elvis</p>
                <p class="pt-0 pr-4 pl-4 font-extralight">Super Admin</p>
                <ul role="list">
                    <router-link to="/admin/dashboard">
                        <li class="flex p-4 hover:bg-orange-100">
                            <fa icon="dashboard" />
                            <div class="ml-2 overflow-hidden">
                            <p class="text-sm truncate">Dashboard</p>
                            </div>
                        </li>
                    </router-link>
                    <router-link to="/admin/branches">
                        <li class="flex p-4 hover:bg-orange-100">
                            <fa icon="church" />
                            <div class="ml-2 overflow-hidden">
                            <p class="text-sm truncate">Branches</p>
                            </div>
                        </li>
                    </router-link>
                    <router-link to="/admin/stats">
                        <li class="flex p-4 hover:bg-orange-100">
                            <i class="fas fa-chart-pie"></i>
                            <fa icon="chart-pie" />
                            <div class="ml-2 overflow-hidden">
                            <p class="text-sm truncate">Stats</p>
                            </div>
                        </li>
                    </router-link>
                    <router-link to="/admin/stats">
                        <li class="flex p-4 hover:bg-orange-100" title="coming soon">
                            <i class="fas fa-chart-pie"></i>
                            <fa icon="calendar-week" />
                            <div class="ml-2 overflow-hidden">
                            <p class="text-sm truncate">Events</p>
                            </div>
                        </li>
                    </router-link>
                    <router-link to="/admin/stats">
                        <li class="flex p-4 hover:bg-orange-100">
                            <fa icon="key" />
                            <div class="ml-2 overflow-hidden">
                            <p class="text-sm truncate">Roles & Privileges</p>
                            </div>
                        </li>
                    </router-link>
                    <router-link to="/admin/list-users">
                        <li class="flex p-4 hover:bg-orange-100">
                            <fa icon="users" />
                            <div class="ml-2 overflow-hidden">
                            <p class="text-sm truncate">User Management</p>
                            </div>
                        </li>
                    </router-link>
                    <li class="flex p-4 hover:bg-orange-100" @click="showLogoutModal">
                        <fa icon="sign-out-alt" />
                        <div class="ml-2 overflow-hidden">
                        <p class="text-sm truncate">Logout </p>
                        </div>
                    </li>
                    <li class="grid p-4 v-screen justify-items-center" title="coming soon">
                        <div class="bg-gray-600 hover:bg-orange-600 rounded-full p-2 text-white">
                            <fa icon="angle-double-left" />
                        </div>
                    </li>
                </ul>
            </div>


            <!-- LOAD CONTENT HERE -->
            <!-- <transition name="fade" mode="out-in"> -->
                <router-view></router-view>
            <!-- </transition> -->
            <!-- END CONTENT LOAD -->

        </div>    
    </div>
</template>

<script>
export default {
    name: 'AdminTemplate',
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

<style scoped>

</style>