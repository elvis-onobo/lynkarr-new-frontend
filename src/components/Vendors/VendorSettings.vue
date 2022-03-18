<template>
  <div class="md:grid grid-cols-3 md:gap-4">
    <div class="col-span-1 md:space-y-2">
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
            Withdrawal
            <input
              type="checkbox"
              role="switch"
              class="default:ring-2"
              checked
            />
          </p>
          <p>
            Payment Received
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
        <p class="font-extrabold">Update Company Information</p>
        <hr />

        <div class="form">
          <input type="text" class="p-2 rounded-md" placeholder="Name" />
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
                <label>Upload a CAC Document</label>
            </div>
          <input type="file" class="rounded-md" placeholder="Date of Birth" />
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