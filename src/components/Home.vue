
<template>
  <div class="font-sans text-blue-magenta-900">
    <nav class="p-2 flex items-center place-content-between">
      <div class="w-24 visible md:invisible">
        <img src="../assets/images/assetifyme-logo.png" />
      </div>
      <!-- <div class="item-right invisible md:visible">
        <ul class="flex space-x-2">
          <li>Login</li>
          <li>About Us</li>
        </ul>
      </div> -->

      <!-- Mobile Menu: Hide On Big Screens -->
      <div class="w-24 visible md:invisible">
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
          text-center
        "
      >
        <div>
          <div class="grid place-items-center invisible md:visible">
            <img src="../assets/images/assetifyme-logo.png" class="w-32" />
          </div>
          <p class="text-5xl font-extrabold text-blue-magenta-900">Buy Assets the <span class="text-blue-magenta-500">Betarr</span> Way</p>
          <blockquote class="text-sm">
            There's only one way to eat an elephant:
            <strong>a bit at a time</strong> - Desmond Tutu.
          </blockquote>
          <p class="text-xs p-4 md:p-0">
            Buy lands and houses in small consistent installments that take the stress away
            and enforces your plan so that you can achieve your dreams.
            </p>
          <div class="space-x-2 text-white mt-2">
            <router-link :to="{ name: 'sign-up' }">
            <button class="p-2 bg-blue-magenta-500 rounded-md hover:bg-gray-600">
              Sign Up
            </button>
            </router-link>

            <router-link :to="{ name: 'login' }">
            <button class="p-2 bg-blue-magenta-900 rounded-md hover:bg-gray-600">
              Login
            </button>
            </router-link>
          </div>
        </div>
        <div>
          <img src="../assets/images/assetifyme_mockup.jpeg" />
        </div>
      </div>
    </div>
  </div>

  <div class="grid place-items-center mt-4 bg-blue-magenta-500 text-white">
    <div class="container">
      <div class="grid place-items-center p-8">
        <p class="text-3xl font-extrabold">Why Betarr?</p>
        <p class="text-center font-bold md:p-8">
          It can be really hard to buy lands and houses upfront, but it is
          really easy to buy lands and houses in installments. With
          AssetifyMe.com you can now buy lands and houses from the most reliable
          real estate companies in Nigeria at
          <strong>no extra cost</strong>. Our platform allows you to make
          payments installmentally in a way that suits your budget and takes
          away the pressure from you. Whether you are in Lagos, London or
          Lousiana.
        </p>
        <button
          class="p-2 bg-blue-magenta-900 text-white rounded-md hover:bg-gray-600 mt-2"
        >
          Start Buying
        </button>
      </div>
    </div>
  </div>

  <div class="grid md:h-64 m-4 items-center place-items-center">
    <p class="text-5xl font-extrabold p-10 text-blue-magenta-500">
      Start owning an asset with as little as
      <span>&#8358;1000</span>
    </p>
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
      <div class="p-5 rounded-2xl bg-blue-magenta-100">
        <div class="p-4 text-blue-magenta-900">
          <div class="rounded-md">
            <fa icon="pen" class="bg-blue-magenta-500 text-white p-4 rounded-md" />
          </div>

          <p class="text-3xl font-semibold mt-4">Sign Up</p>
          <p>
            It all begins with a step. A decision to start and everything else
            falls in place.
          </p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-magenta-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-blue-magenta-100">
        <div class="p-4 text-blue-magenta-900">
          <div class="rounded-md">
            <fa icon="calendar" class="bg-blue-magenta-500 text-white p-4 rounded-md" />
          </div>
          <p class="text-3xl font-semibold mt-4">Setup a Plan</p>
          <p>
            Setup a daily, weekly, monthly or even yearly payment plan for the
            asset you want.
          </p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-blue-magenta-300 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-blue-magenta-100">
        <div class="p-4 text-blue-magenta-900">
          <div class="rounded-md">
            <fa icon="house" class="bg-blue-magenta-500 text-white p-4 rounded-md" />
          </div>
          <p class="text-3xl font-semibold mt-4">Claim Your Asset</p>
          <p>Claim your asset and all documents on completion of payment.</p>
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

  <div
    class="
      grid
      place-items-center
      rounded-lg
      p-4
      v-screen
      align-middle
      m-6
      grayscale
    "
  >
    <div class="grid place-items-center">
      <p class="md:text-2xl text-sm p-4 font-serif text-blue-magenta-900">
        In partnership with some of the best
      </p>
    </div>
    <div class="flex gap-2 content-center items-center">
      <div>
        <img src="../assets/images/landwey-logo.png" class="w-50" />
      </div>
      <div>
        <img src="../assets/images/adron-logo.png" class="w-20" />
      </div>
      <div>
        <img src="../assets/images/pwan-homes-logo.png" class="w-52" />
      </div>
      <div>
        <img src="../assets/images/revolution-plus-logo.png" class="w-32" />
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <div
      class="
        md:grid md:grid-cols-4 md:gap-2
        text-center
        p-8
        rounded-md
        place-items-center
        space-y-4
        md:space-y-0
      "
    >
      <div class="bg-blue-magenta-100 rounded-md p-8 text-blue-magenta-900">
        <p class="font-extrabold">Buy in Bits</p>
        <p class="text-justify text-sm">
          Pay for lands and houses in bits according to your budget daily,
          weekly, monthly or even yearly with automatic deductions.
        </p>
      </div>

      <div class="bg-blue-magenta-100 rounded-md p-8 text-blue-magenta-900">
        <p class="font-extrabold">Asset Padi</p>
        <p class="text-justify text-sm">
          Harness the power of working as a group. Invite your friends, form a
          clique and purchase assets together.
        </p>
      </div>

      <div class="bg-blue-magenta-100 rounded-md p-8 text-blue-magenta-900">
        <p class="font-extrabold">Spot Swap</p>
        <p class="text-justify text-sm">
          If you are in a fix and need money ASAP, you can swap your spot on the
          system automatically with another customer.
        </p>
      </div>

      <div class="bg-blue-magenta-100 rounded-md p-8 text-blue-magenta-900">
        <p class="font-extrabold">Agent A</p>
        <p class="text-justify text-sm">
          Refer your friends and family and if they buy a property from any of
          our partners AssetifyMe, you will receive a commission.
        </p>
      </div>
    </div>
  </div>

  <div class="md:grid gap-1 m-10 p-10 rounded-md place-items-center grayscale">
    <div>
      <p class="md:text-2xl text-xs text-center font-semibold">
        Payments processed and secured by
      </p>
    </div>
    <div>
      <img src="../assets/images/paystack.png" />
    </div>
  </div>

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
          <img src="../assets/images/assetifyme-logo.png" class="w-24" />
        </div>

        <div>
          <p class="font-extrabold">Products</p>
          <p>Buy in Bits</p>
          <p>Asset Padi</p>
          <p>Spot Swap</p>
          <p>Agent A</p>
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
          <p class="font-extrabold">Let's Get Social</p>
          <div class="grid">
            <fa icon="facebook" />
            <fa icon="instagram" />
            <fa icon="whatsapp" />
            <div class="text-">
              <p>16 Ebun Oluwa Street, Shomolu, Lagos</p>
              <p>service@digitalboss.com</p>
              <p>+234 803 910 1861</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-1 place-items-center mt-4 text-blue-magenta-900">
        <p class="md:p-20 pl-8 pr-8 text-center text-sm">
          AssetifyMe is the leading property marketing and property payment
          collection platform in Nigeria. We operate in partnership with the
          elite property firms to bring you the best deals and the ability to
          pay for them fast and conveniently. AssetifyMe is a property of
          DigitalBoss Africa, registered with the Corporate Affairs Commision of
          Nigeria with registration number RC3300055.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped>
.bgImg {
  background: url("../assets/images/naira.jpeg") no-repeat center center;
  border-radius: 10px;
}
</style>
