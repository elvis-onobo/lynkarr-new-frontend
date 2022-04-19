<template>
    <div class="md:grid md:grid-cols-4 p-6 md:space-x-4 space-y-4 md:space-y-0">
        <div class="w-full">
            <form class="space-y-2 border border-gray-200 p-4 rounded-md">
                <p class="font-extrabold pb-2">Update Profile</p>
                <div>
                    <input type="text" placeholder="First name" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" autofocus />
                </div>

                <div>
                    <input type="text" placeholder="Last name" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" />
                </div>

                <div>
                    <input type="text" placeholder="Phone Number" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" />
                </div>

                <div>
                    <input type="text" placeholder="Current Password" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" />
                </div>

                <div>
                    <input type="text" placeholder="New Password" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" />
                </div>

                <div>
                    <input type="text" placeholder="Repeat New Password" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" />
                </div>

                <div>
                    <input type="file" class="p-2 w-full bg-green-50 focus:outline-none rounded-md" accept="image/*" />
                </div>

                <button type="button" class="p-2 rounded-md bg-gradient-to-r from-lynkarr-blue to-lynkarr-green text-white">
                    Update
                </button>
            </form>
        </div>

        <div class="grid border border-gray-200 rounded-md space-y-2 place-items-center w-full p-4 md:p-0">
            <div class="text-center space-y-2">
                <fa icon="user" class="p-6 bg-gray-50 text-2xl border border-gray-200 rounded-full" />
                <p>Elvis Onobo</p>
                <p>08039101861</p>
                <p>Super Admin</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
