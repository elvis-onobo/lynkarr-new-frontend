<template>
    <div class="col-span-10 flex bg-orange-50">
        <div class="grid grid-cols-4">
            <div>
                <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></pie-chart>
            </div>
            <div>
                <bar-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></bar-chart>
            </div>
            <div>
                <column-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Blackberry', 12], ['Realberry', 50]]"></column-chart>
            </div>
            <div>
                <area-chart :data="{'2021-01-01': 11, '2021-01-02': 6}"></area-chart>
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