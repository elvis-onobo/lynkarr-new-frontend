<template>
  <div class="md:grid grid-cols-3 md:gap-4">
    <div class="col-span-1">
      <div class="w-full p-8 md:p-0">
        <div class="rounded-md bg-blue-50 p-8 space-y-2">
          <p class="font-extrabold">Notifications</p>
          <hr />

          <p>
            Login
            <input
              type="checkbox"
              role="switch"
              class="default:ring-2"
              checked
            />
          </p>
          <p>
            Deposit
            <input
              type="checkbox"
              role="switch"
              class="default:ring-2"
              checked
            />
          </p>
          <p>
            Company Updates
            <input
              type="checkbox"
              role="switch"
              class="default:ring-2"
              checked
            />
          </p>
        </div>
      </div>
    </div>

    <div
      class="
        h-full
        md:w-full
        rounded-md
        ml-8
        mr-8
        md:ml-0 md:mr-0
        p-8
        overflow-auto
        bg-blue-50
      "
    >
      <form class="space-y-2">
        <p class="font-extrabold">Update Your Information</p>
        <hr />

        <div class="form">
          <input type="text" class="p-2 rounded-md" placeholder="First name" />
        </div>

        <div class="form">
          <input type="text" class="p-2 rounded-md" placeholder="Last name" />
        </div>

        <div class="form">
          <input
            type="password"
            class="p-2 rounded-md"
            placeholder="Old Password"
          />
        </div>

        <div class="form">
          <input
            type="password"
            class="p-2 rounded-md"
            placeholder="New Password"
          />
        </div>

        <div class="form">
          <input
            type="password"
            class="p-2 rounded-md"
            placeholder="Confirm New Password"
          />
        </div>

        <button type="submit" class="p-2 bg-black text-white rounded-md">
          Update
        </button>
      </form>
    </div>

    <div
      class="
        h-full
        md:w-full
        rounded-md
        ml-8
        mr-8
        md:ml-0 md:mr-0
        p-8
        overflow-auto
        bg-blue-50
      "
    >
      <form class="space-y-3 col-span-2">
        <p class="font-extrabold">Legal Information</p>
        <hr />

        <div class="form">
            <div>
                <label>BVN</label>
            </div>
          <input type="text" class="p-2 rounded-md" placeholder="BVN" />
        </div>

        <div class="form">
            <div>
                <label>Date of Birth</label>
            </div>
          <input type="date" class="p-2 rounded-md" placeholder="Date of Birth" title="Date of Birth" />
        </div>

        <div class="form">
            <div>
                <label>Upload a Legal ID</label>
                <p class="text-xs">NIN, Driver's License, International Passport etc</p>
            </div>
          <input type="file" class="p-2 rounded-md" placeholder="Date of Birth" />
        </div>

        <button type="submit" class="p-2 bg-black text-white rounded-md">
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
</script>