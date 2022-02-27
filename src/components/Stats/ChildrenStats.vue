
<template>

    <div class="col-span-10 flex bg-orange-50">
        <div class="grid grid-cols-3 gap-6 m-4">
            <div class="place-items-center v-screen max-w-full bg-gray-600 rounded-md drop-shadow-xl h-24">
                <div class="grid max-w-full text-white justify-items-center">
                    <span class="text-3xl font-semibold">{{ totalChildren.total }}</span>
                    <p>Total</p>
                </div>
            </div>
            <div class="place-items-center v-screen max-w-full bg-violet-700 rounded-md drop-shadow-xl h-24">
                <div class="grid max-w-full text-white v-screen justify-items-center">
                    <span class="text-3xl font-semibold">{{ totalChildren.male }}</span>
                    <p>Male</p>
                </div>
            </div>
            <div class="place-items-center v-screen max-w-full bg-green-700 rounded-md drop-shadow-xl h-24">
                <div class="grid max-w-full text-white v-screen justify-items-center">
                    <span class="text-3xl font-semibold">{{ totalChildren.female }}</span>
                    <p>Female</p>
                </div>
            </div> 

            <div class="h-full max-w-full grid place-items-center">
                <pie-chart :data="[
                    ['Male', ageOneToFive.male],
                    ['Female', ageOneToFive.female]
                ]"></pie-chart>
                <p>Age 1-5</p>
            </div>
            <div class="h-full max-w-full grid place-items-center">
                <pie-chart :data="[
                    ['Male', ageSixToNine.male],
                    ['Female', ageSixToNine.female]
                ]"></pie-chart>
                <p>Age 6-9</p>
            </div>
            <div class="h-full max-w-full grid place-items-center">
                <pie-chart :data="[
                    ['Male', ageTenToTwelve.male],
                    ['Female', ageTenToTwelve.female]
                ]"></pie-chart>
                <p>Age 10-12</p>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from '../../axios-config'

export default {
    name: 'ChildrenStats',
    data(){
        return {
            churchId:1,
            eventDate:'2022-02-20',
            totalChildrenObj: {},
            ageOneToFive: {},
            ageSixToNine: {},
            ageTenToTwelve: {},
            totalChildren: {},
        }
    },
    async mounted(){
        try { 
            const res = await HTTP.get(`api/total-stats?churchId=${this.churchId}&eventDate=${this.eventDate}`)

            if(res.status === 200){
                // Stats
                const { children } = res.data.data
                const {ageOneToFive} = children
                const {ageSixToNine} = children
                const {ageTenToTwelve} = children
                const {totalChildren} = children
                this.ageOneToFive = ageOneToFive
                this.ageSixToNine = ageSixToNine
                this.ageTenToTwelve = ageTenToTwelve
                this.totalChildren = totalChildren
            }
        } catch (error) {
            console.log('>>>>>>>> ', error);
        }
    }
}
</script>
