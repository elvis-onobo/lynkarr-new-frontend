<template>
  <div
    class="
      col-span-5
      p-4
      bg-orange-50
      rounded-sm
      drop-shadow-xl
      h-full
      outline outline-offset-1 outline-1
    "
  >
    <div class="grid grid-cols-1 p-4 divide-y-2 divide-gray-200 divide-solid">
      <p class="text-3xl font-semibold"><fa icon="user" /> Create a User</p>
      <form class="" @submit.prevent="createUser">
        <div class="mt-2">
          <input
            type="text"
            v-model="firstName"
            class="rounded-sm p-2"
            placeholder="First name"
            autofocus
          />
        </div>
        <div class="mt-2">
          <input
            type=""
            v-model="lastName"
            class="rounded-sm p-2"
            placeholder="Last name"
          />
        </div>
        <div class="mt-2">
          <input
            type=""
            v-model="email"
            class="rounded-sm p-2"
            placeholder="E-mail"
          />
        </div>
        <div class="mt-2">
          <select class="form-select p-2" v-model="selectedRole">
            <option disabled>Select Role</option>
            <option :value="value.id" v-for="(value, key) in roles" :key="key">
              {{ value.role }}
            </option>
          </select>
        </div>
        <button
          class="bg-gray-800 hover:bg-gray-600 rounded-sm p-2 text-white mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../axios-config";

export default {
  name: "CreateUser",
  data() {
    return {
      roles: {},
      selectedRole: 0,
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    async getRole() {
      try {
        const res = await HTTP.get("api/roles");

        if (res.status === 200) {
          this.roles = res.data.data;
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async createUser() {
      try {
        const res = await HTTP.post("api/create-user", {
          firstName: this.firstName,
          lastName: this.lastName,
          role: this.selectedRole,
          email: this.email,
        });

        if (res.status === 200) {
          this.$toast.success(res.data.data);
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
  },
  async mounted() {
    try {
      await this.getRole();
    } catch (error) {
      this.$toast.error(error.message);
    }
  },
};
</script>