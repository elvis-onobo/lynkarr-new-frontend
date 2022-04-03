
<template>
  <div class="font-sans text-blue-magenta-900">
    <nav class="p-2 flex items-center place-content-between">
      <div class="w-24 visible md:invisible">
        <img src="../assets/images/betar-logo.png" />
      </div>
      <!-- <div class="item-right invisible md:visible">
        <ul class="flex space-x-2">
          <li>Login</li>
          <li>About Us</li>
        </ul>
      </div> -->

      <!-- Mobile Menu: Hide On Big Screens -->
      <div class="visible md:invisible">
        <fa icon="bars" class="bg-blue-magenta-200 p-4 rounded-md" />
      </div>
    </nav>
    <div class="container mx-auto h-screen place-items-center">
      <div
        class="
          grid
          md:grid-cols-2
          place-items-center
          space-y-2 space-x-2
          p-4
          md:p-0
        "
      >
        <div>
          <div class="grid invisible md:visible">
            <img src="../assets/images/betar-logo.png" class="w-32" />
          </div>
          <p class="text-5xl font-extrabold text-blue-magenta-900">
            Send Money the
            <span class="text-blue-magenta-500">Betarr</span> Way
          </p>
          <blockquote class="text-sm mt-2">
            Send money to family and friends in Nigeria,
            <strong
              >faster than ever, at a better price than you ever did.</strong
            >
          </blockquote>
          <div class="space-x-2 text-white mt-2">
            <router-link :to="{ name: 'sign-up' }">
              <button
                class="p-2 bg-blue-magenta-500 rounded-md hover:bg-gray-600"
              >
                Sign Up
              </button>
            </router-link>

            <router-link :to="{ name: 'login' }">
              <button
                class="p-2 bg-blue-magenta-900 rounded-md hover:bg-gray-600"
              >
                Login
              </button>
            </router-link>
          </div>
        </div>
        <div>
          <img src="../assets/images/transfer_money.svg" />
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <div
      class="
        md:grid
        grid-cols-3
        gap-4
        place-items-center
        m-6
        space-y-5
        md:space-y-0
      "
    >
      <div class="p-5 w-full rounded-2xl bg-blue-magenta-100">
        <div class="p-4 text-blue-magenta-900">
          <div class="rounded-md">
            <fa
              icon="pen"
              class="bg-blue-magenta-500 text-white p-4 rounded-md"
            />
          </div>

          <p class="text-3xl font-semibold mt-4">Sign Up</p>
          <p>Sign up with your e-mail address.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-magenta-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 w-full rounded-2xl bg-blue-magenta-100">
        <div class="p-4 text-blue-magenta-900">
          <div class="rounded-md">
            <fa
              icon="calendar"
              class="bg-blue-magenta-500 text-white p-4 rounded-md"
            />
          </div>
          <p class="text-3xl font-semibold mt-4">Add Account</p>
          <p>Add the bank account you wish to send money to.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-magenta-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 w-full rounded-2xl bg-blue-magenta-100">
        <div class="p-4 text-blue-magenta-900">
          <div class="rounded-md">
            <fa
              icon="house"
              class="bg-blue-magenta-500 text-white p-4 rounded-md"
            />
          </div>
          <p class="text-3xl font-semibold mt-4">Send</p>
          <p>Send straight to the bank account.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-magenta-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid m-4 items-center place-items-center">
    <p class="text-5xl font-extrabold p-10 text-blue-magenta-900 text-center">
      Start sending money instantly!
    </p>
  </div>

  <div class="container mx-auto">
    <div
      class="
        md:grid md:grid-cols-2 md:gap-2
        p-8
        rounded-md
        place-items-center
        space-y-4
        md:space-y-2
      "
    >
      <div class="w-4/6">
        <img src="../assets/images/undraw_security_on_re_e491.svg" />
      </div>
      <div>
        <p class="text-2xl font-extrabold text-center text-blue-magenta-900">Built with your concerns in mind.</p>
        <div class="md:grid grid-cols-2 gap-2">
          <div class="rounded-md p-8 text-blue-magenta-900">
            <fa
              icon="rocket"
              class="bg-green-200 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Easy to Use</p>
            <p class="text-sm">
              A simple interface. No confusing features. Just send, fast!
            </p>
          </div>

          <div class="rounded-md p-8 text-blue-magenta-900">
            <fa
              icon="clock"
              class="bg-blue-magenta-300 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Instant</p>
            <p class="text-sm">
              We pay immediately, so your family and friends can get on with life.
            </p>
          </div>
          
          <div class="rounded-md p-8 text-blue-magenta-900">
            <fa
              icon="lock"
              class="bg-orange-200 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Safe</p>
            <p class="text-sm">
              All transactions are processed with utmost consideration of the
              safety of your funds.
            </p>
          </div>

          <div class="rounded-md p-8 text-blue-magenta-900">
            <fa
              icon="fingerprint"
              class="bg-purple-300 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Secure</p>
            <p class="text-sm">
              We don't keep your money. It gets paid out to your recipeint.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="container mx-auto">
    <div
      class="
        md:grid md:grid-cols-2 md:gap-2
        p-8
        rounded-md
        place-items-center
        space-y-4
        md:space-y-2
        bg-blue-magenta-100
      "
    >
      <div>
        <p class="md:text-5xl text-sm font-extrabold text-blue-magenta-900 text-right p-4">
          Better rates than you ever got before!
        </p>
      </div>
      <div class="w-4/6">
        <img src="../assets/images/undraw_discount_d-4-bd.svg" />
      </div>
    </div>
  </div>


  <!-- <div class="md:grid gap-1 m-10 p-10 rounded-md place-items-center grayscale">
    <div>
      <p class="md:text-sm text-xs text-center md:font-semibold">
        Payments processed and secured by
      </p>
    </div>
    <div class="md:w-2/6">
      <img src="../assets/images/Flutterwave Logo.svg" />
    </div>
  </div> -->

  <div class="container mx-auto">
    <footer class="text-xs m-10 text-blue-magenta-900">
      <div
        class="
          grid grid-cols-2
          md:grid-cols-5
          space-y-2
          md:space-y-0
          items-start
          text-center
        "
      >
        <div class="grid col-span-2 md:col-span-1 place-items-center">
          <img src="../assets/images/betar-logo.png" class="w-24" />
        </div>

        <div>
          <p class="font-extrabold">Products</p>
          <p>Send</p>
          <p>Money Exchange
            <span class="bg-orange-500 text-white rounded-md"
              >Coming Soon</span
            >
          </p>
          <p>
            Bank Accounts
            <span class="bg-orange-500 text-white rounded-md"
              >Coming Soon</span
            >
          </p>
        </div>

        <div>
          <p class="font-extrabold">Company</p>
          <p><a href="http://">About</a></p>
          <p><a href="http://">FAQs</a></p>
        </div>

        <div class="">
          <p class="font-extrabold">Legal</p>
          <p><a href="http://">Terms and Conditions</a></p>
          <p><a href="http://">Privacy</a></p>
          <p><a href="http://">Security</a></p>
        </div>

        <div class="">
          <p class="font-extrabold">Connect</p>
          <div class="grid">
            <fa icon="facebook" />
            <fa icon="instagram" />
            <fa icon="whatsapp" />
            <div class="text-">
              <p>help@betarr.com</p>
              <p>+234 803 910 1861</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-1 place-items-center mt-4 text-blue-magenta-900">
        <p class="md:p-20 pl-8 pr-8 text-justify md:text-center text-sm">
          Betarr &copy;{{ year }}.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.bgImg {
  background: url("../assets/images/naira.jpeg") no-repeat center center;
  border-radius: 10px;
}
</style>
