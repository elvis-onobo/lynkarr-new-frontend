<template>
  <div class="md:grid place-items-center">
    <div
      class="
        outline 
        outline-blue-magenta-900
        rounded-md
        ml-8
        mr-8
        md:ml-0 md:mr-0
        p-8
      "
    >
      <form class="space-y-2">
        <p class="font-extrabold">Update Profile</p>
        <hr />

        <div class="form">
          <input type="text" class="p-2 rounded-md bg-blue-magenta-100" placeholder="Name" />
        </div>

        <div class="form">
          <input type="text" class="p-2 rounded-md bg-blue-magenta-100" placeholder="Last name" />
        </div>

        <div class="form">
          <input
            type="password"
            class="p-2 rounded-md bg-blue-magenta-100"
            placeholder="Old Password"
          />
        </div>

        <div class="form">
          <input
            type="password"
            class="p-2 rounded-md bg-blue-magenta-100"
            placeholder="New Password"
          />
        </div>

        <div class="form">
          <input
            type="password"
            class="p-2 rounded-md bg-blue-magenta-100"
            placeholder="Confirm New Password"
          />
        </div>

        <button type="submit" class="p-2 bg-blue-magenta-900 hover:bg-gray-400 text-white rounded-md">
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
</script>