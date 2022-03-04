<template>
    <div class="col-span-9 p-3 bg-orange-50 rounded-sm drop-shadow-xl h-96 overflow-auto">
        <div class="grid grid-cols-1">
            <router-link to="/admin/create-user">
                <div class=" drop-shadow-xl mb-2">
                    <button class="bg-gray-800 hover:bg-orange-600 rounded-sm p-2 text-white m-2">
                        <fa icon="user" /> Create User
                    </button>
                </div>
            </router-link>
        </div>
        <div class="grid grid-cols-1 p-3">
            <table class="table-auto">
                <tbody class="divide-y-2 divide-gray-200 divide-solid">
                    <tr :value="user.id" :key="user.id" v-for="user in data">
                        <td>{{user.first_name}}</td>
                        <td>{{user.last_name}}</td>
                        <td>{{user.userRole.role}}</td>
                        <td>{{convertDate(user.created_at)}}</td>
                        <button class="bg-gray-800 hover:bg-orange-600 rounded-sm p-1 mr-2 text-white">
                            Edit
                        </button>
                        <button class="bg-gray-800 hover:bg-orange-600 rounded-sm p-1 text-white">
                            Deactivate
                        </button>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>

<script>
import {HTTP} from '../../axios-config'

export default {
  name: 'Login',
  data(){
    return {
        data:{}
    }
  },
  methods: {
    async getUsers(){
      try {
        const res = await HTTP.get('api/list-users')

        if(res.status !== 200){
            this.$toast.error(res.message)
        }

        this.data = res.data.data
      } catch (error) {
        this.$toast.error(error.message)
      }
    },
    convertDate(date){
        return new Date(date).toLocaleDateString()
    }
  },
  async mounted(){
    try {
        await this.getUsers()
    } catch (error) {
        this.$toast.error(error.message)
    }
  }
}
</script>