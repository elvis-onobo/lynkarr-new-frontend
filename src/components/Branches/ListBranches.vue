<template>
    <div class="col-span-9 p-4 bg-orange-50 rounded-sm drop-shadow-xl h-96 overflow-auto">
        <div class="grid grid-cols-4">
            <router-link to="/admin/create-branch">
                <div class="col-span-2 p-5 drop-shadow-xl mb-2">
                    <button class="bg-gray-800 hover:bg-orange-600 rounded-sm p-2 text-white mt-2 m-2">
                        Add Centre
                    </button>
                </div>
            </router-link>
        </div>
        <div class="grid grid-cols-12 justify-items-center">
            <div class="col-span-2 justify-center p-5 bg-white drop-shadow-xl mb-2" v-for="church in churches" :key="church.uuid">
                <a href="" class="hover:pointer-events-auto">
                    <span class="text-7xl">
                        <fa icon="church" />
                    </span>
                    <p>{{ church.center_name }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from '../../axios-config'

export default {
    name: 'ListBranches',
    data(){
        return {
            churches: []
        }
    },
    async mounted(){
        try { 
            const res = await HTTP.get(`api/fetch-church-centers`)

            if(res.status === 200){
                this.churches = res.data.data
            }
        } catch (error) {
            console.log('>>>>>>>> ', error);
        }
    }
}
</script>
