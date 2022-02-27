<template>
    <div class="col-span-10 flex bg-orange-50">
        <div class="grid grid-cols-4">
            <div class="col-span-2 m-3 p-2">
                <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></pie-chart>
                <p>Church Population Comparison</p>
            </div>
            <div class="col-span-2 m-3 p-2">
                <bar-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></bar-chart>
            </div>
            <div class="col-span-2 m-3 p-2">
                <column-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></column-chart>
            </div>
            <div class="col-span-2 m-3 p-2">
                <column-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></column-chart>
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