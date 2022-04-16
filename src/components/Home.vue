
<template>
  <div class="font-sans text-gray-700">
    <navbar
      class="md:px-16 px-6 flex flex-wrap bg-white items-center md-py-0 py-2"
    >
      <div class="flex flex-1 justify-between items-center">
        <img src="../assets/logo.png" class="w-28" />
      </div>

      <label for="menu-toggle" class="md:hidden block">
        <fa icon="bars" class="p-4 rounded-md" />
      </label>

      <input type="checkbox" class="hidden" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul
            class="
              lg:flex
              items-center
              justify-between
              text-base text-gray-700
              pt-4
              lg:pt-0
              md:space-x-5
            "
          >
            <li
              class="
                hover:border-gray-700
                border-b-2 border-transparent
              "
            >
              <router-link :to="{ name: 'login' }">Products</router-link>
            </li>
            <li
              class="
                hover:border-gray-700
                border-b-2 border-transparent
              "
            >
              <router-link :to="{ name: 'login' }">FAQ</router-link>
            </li>
            <router-link :to="{ name: 'login' }">
              <li
                class="
                  rounded-md
                  p-2
                  text-white
                  bg-gradient-to-r from-lynkarr-blue to-lynkarr-green
                  hover:bg-gray-400
                "
              >
                <fa icon="sign-in" /> Login
              </li>
            </router-link>
          </ul>
        </nav>
      </div>
    </navbar>

    <div class="container mx-auto h-screen place-items-center mt-8">
      <div
        class="
          grid
          md:grid-cols-8
          place-items-center
          space-y-2 space-x-2
          p-8
          md:p-0
        "
      >
        <div class="md:col-span-3">
          <p class="text-5xl font-extrabold text-gray-700">
            Receive Payments the
            <span class="text-lynkarr-blue">Lynkarr</span> Way
          </p>
          <blockquote class="text-sm mt-2">
            Allow your customers to pay you from their wallet apps,
            <strong
              >it's fast and secure.</strong
            >
          </blockquote>
          <div class="space-x-2 text-white mt-2">
            <router-link :to="{ name: 'sign-up' }">
              <button
                class="p-2 bg-gradient-to-r from-lynkarr-blue to-lynkarr-green rounded-md hover:bg-gray-600"
              >
                Get Started
              </button>
            </router-link>
            <lynkarr-checkout></lynkarr-checkout>

          </div>
        </div>
        <div class="md:col-span-5 fill-lynkarr-green">
          <img src="../assets/images/transfer_money_blue.svg" />
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
      <div class="p-5 w-full rounded-2xl bg-blue-100">
        <div class="p-4 text-gray-700">
          <div class="rounded-md">
            <fa
              icon="pen"
              class="bg-lynkarr-blue text-white p-4 rounded-md"
            />
          </div>

          <p class="text-3xl font-semibold mt-4">Sign Up</p>
          <p>Sign up with your e-mail address.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 w-full rounded-2xl bg-blue-100">
        <div class="p-4 text-gray-700">
          <div class="rounded-md">
            <fa
              icon="check"
              class="bg-lynkarr-blue text-white p-4 rounded-md"
            />
          </div>
          <p class="text-3xl font-semibold mt-4">KYC</p>
          <p>Submit your legal documents or setup starter business account.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 w-full rounded-2xl bg-blue-100">
        <div class="p-4 text-gray-700">
          <div class="rounded-md">
            <fa
              icon="wallet"
              class="bg-lynkarr-blue text-white p-4 rounded-md"
            />
          </div>
          <p class="text-3xl font-semibold mt-4">Receive</p>
          <p>Start receiving payments on Lynkarr.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid m-4 items-center place-items-center">
    <p class="text-5xl font-extrabold p-10 text-lynkarr-blue text-center">
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
        <img src="../assets/images/security_blue.svg" />
      </div>
      <div>
        <p class="text-2xl font-extrabold text-center text-gray-700">
          Built with your concerns in mind.
        </p>
        <div class="md:grid grid-cols-2 gap-2">
          <div class="rounded-md p-8 text-gray-700">
            <fa
              icon="rocket"
              class="bg-green-200 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Easy to Use</p>
            <p class="text-sm">
              Our interface and APIs are very easy to use!
            </p>
          </div>

          <div class="rounded-md p-8 text-gray-700">
            <fa
              icon="clock"
              class="bg-blue-200 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Instant</p>
            <p class="text-sm">
              Your payments are settled immediately.
            </p>
          </div>

          <div class="rounded-md p-8 text-gray-700">
            <fa icon="lock" class="bg-orange-200 rounded-full p-4 text-white" />
            <p class="font-extrabold text-2xl">Safe</p>
            <p class="text-sm">
              Built in comformity to financial technology standards.
            </p>
          </div>

          <div class="rounded-md p-8 text-gray-700">
            <fa
              icon="fingerprint"
              class="bg-violet-200 rounded-full p-4 text-white"
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
        bg-blue-100
      "
    >
      <div>
        <p
          class="
            md:text-5xl
            text-sm
            font-extrabold
            text-lynkarr-blue text-right
            p-4
          "
        >
          Better rates than you ever got before!
        </p>
        <p class="text-right p-4 md:text-2xl font-extrabold">&#8358;10 per transaction</p>
      </div>
      <div class="w-4/6">
        <img src="../assets/images/discount_blue.svg" />
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <footer class="text-xs m-10 text-gray-700">
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
          <img src="../assets/logo.png" class="w-24" />
        </div>

        <div>
          <p class="font-extrabold">Products</p>
          <p>Send</p>
          <p>
            Negative Balance
          </p>
          <p>Card</p>
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
              <p>help@lynkarr.com</p>
              <p>+234 803 910 1861</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-1 place-items-center mt-4 text-gray-700">
        <p class="md:p-20 pl-8 pr-8 text-justify md:text-center text-sm">
          Lynkarr &copy;{{ year }}.
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
  components:{
  }
};
</script>

<style scoped>
.bgImg {
  background: url("../assets/images/naira.jpeg") no-repeat center center;
  border-radius: 10px;
}

#menu-toggle:checked + #menu {
  display: block;
}
</style>
