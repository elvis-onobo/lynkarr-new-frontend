
<template>
  <div class="font-sans text-gray-700">
    <navbar
      class="md:px-16 px-6 flex flex-wrap bg-white items-center md-py-0 py-2"
    >
      <div class="flex flex-1 justify-between items-center">
        <!-- <img src="../assets/logo.png" class="w-28" /> -->
        <p class="font-extrabold text-dark-blue text-3xl">Brijje</p>
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
            <li class="hover:border-gray-700 border-b-2 border-transparent">
              <router-link :to="{ name: 'login' }">Products</router-link>
            </li>
            <li class="hover:border-gray-700 border-b-2 border-transparent">
              <router-link :to="{ name: 'login' }">FAQ</router-link>
            </li>
            <router-link :to="{ name: 'login' }">
              <li
                class="rounded-md p-2 text-white bg-green-500 hover:bg-gray-400"
              >
                <fa icon="sign-in" /> Login
              </li>
            </router-link>
          </ul>
        </nav>
      </div>
    </navbar>

    <div
      class="grid container mx-auto h-screen place-items-center items-center"
    >
      <div class="place-items-center text-center">
        <p class="md:text-8xl text-2xl font-extrabold text-dark-blue">
          Connecting People
        </p>
        <p class="md:text-8xl text-2xl text-green-500">Through Businesses.</p>
        <div class="text-sm mt-2 md:px-72">
          Businesses use Brijje to stay connected in a way that enables their
          users to perform transactions that they had never been able to do
          before.
        </div>
        <div class="space-x-2 text-white mt-2">
          <router-link :to="{ name: 'sign-up' }">
            <button class="p-2 bg-green-500 rounded-md hover:bg-gray-600">
              Get Started
            </button>
          </router-link>
          <brijje-checkout></brijje-checkout>
        </div>
      </div>
      <!-- <div class="md:col-span-4 col-span-12">
          <img src="../assets/images/connect-world.png" class="w-3/4" />
        </div> -->
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
      <div class="p-5 w-full rounded-2xl bg-green-300">
        <div class="p-4 text-dark-blue">
          <div class="rounded-md">
            <fa icon="pen" class="bg-green-500 text-white p-4 rounded-md" />
          </div>

          <p class="text-3xl font-semibold mt-4">Multiple Denominations</p>
          <p>Sign up with your e-mail address.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-green-400 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 w-full rounded-2xl bg-green-300">
        <div class="p-4 text-dark-blue">
          <div class="rounded-md">
            <fa icon="check" class="bg-green-500 text-white p-4 rounded-md" />
          </div>
          <p class="text-3xl font-semibold mt-4">Instant Resolution</p>
          <p>Submit your legal documents or setup starter business account.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-green-400 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="p-5 w-full rounded-2xl bg-green-300">
        <div class="p-4 text-dark-blue">
          <div class="rounded-md">
            <fa icon="wallet" class="bg-green-500 text-white p-4 rounded-md" />
          </div>
          <p class="text-3xl font-semibold mt-4">Receive</p>
          <p>Start receiving payments on brijje.</p>
          <div class="mt-4 rounded-md">
            <fa
              icon="arrow-right"
              class="bg-green-400 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid m-4 items-center place-items-center">
    <p class="text-5xl font-extrabold p-10 text-center text-dark-blue">
      Connecting Businesses Across Borders!
    </p>
  </div>

  <div class="container mx-auto">
    <div class="md:grid md:grid-cols-5 items-center place-items-center">
      <div>
        <img
          src="../assets/images/nigeria-flag.jpeg"
          alt="Nigeria-Flag"
          class="rounded-md object-fill h-20 w-auto"
        />
      </div>
      <div>
        <img
          src="../assets/images/usa-flag.png"
          alt="Nigeria-Flag"
          class="rounded-md object-fill h-20 w-auto"
        />
      </div>
      <div>
        <img
          src="../assets/images/Flag_of_Europe.svg.png"
          alt=""
          class="rounded-md object-fill h-20 w-auto"
        />
      </div>
      <div>
        <img
          src="../assets/images/Flag_of_Great_Britain_(1707–1800).svg.png"
          alt=""
          class="rounded-md object-fill h-20 w-auto"
        />
      </div>
      <div>
        <img
          src="../assets/images/640px-Flag_of_Ghana.svg.png"
          alt=""
          class="rounded-md object-fill h-20 w-auto"
        />
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
      "
    >
      <div class="w-4/6">
        <img
          src="../assets/images/undraw_security_on_re_e491.svg"
          alt="Undraw security image"
        />
      </div>
      <div>
        <p class="text-2xl font-extrabold text-center text-dark-blue">
          Built with your concerns in mind.
        </p>
        <div class="md:grid grid-cols-2 gap-2">
          <div class="rounded-md p-8 text-dark-blue">
            <fa
              icon="rocket"
              class="bg-green-200 rounded-full p-4 text-white"
            />
            <p class="font-extrabold text-2xl">Easy to Use</p>
            <p class="text-sm">
              We have created an interface that is easy for you and an easy
              checkout for your users!
            </p>
          </div>

          <div class="rounded-md p-8 text-dark-blue">
            <fa icon="clock" class="bg-blue-200 rounded-full p-4 text-white" />
            <p class="font-extrabold text-2xl">Instant</p>
            <p class="text-sm">
              The receiving party gets balanced on the other side immediately.
            </p>
          </div>

          <div class="rounded-md p-8 text-dark-blue">
            <fa icon="lock" class="bg-orange-200 rounded-full p-4 text-white" />
            <p class="font-extrabold text-2xl">Safe</p>
            <p class="text-sm">
              We employ bank grade security to protect all resources shared
              through Brijje.
            </p>
          </div>

          <div class="rounded-md p-8 text-dark-blue">
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
        bg-green-500
        text-dark-blue
      "
    >
      <div class="space-y-1">
        <p class="md:text-5xl text-sm font-extrabold">Get on the Brijje now!</p>
        <p class="font-extrabold">
          Sign up on Brijje and give your users the power to do more...
        </p>
        <button class="bg-dark-blue rounded-md p-2 text-white">
          Get Started
        </button>
      </div>
      <div class="w-4/6">
        <img src="../assets/images/undraw_golden_gate_bridge_re_e8tc.svg" />
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
          <fa icon="facebook" />
        </div>

        <div>
          <p class="font-extrabold">Products</p>
          <p>Send</p>
          <p>SmartExchange</p>
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
              <p>help@brijje.com</p>
              <p>+234 803 910 1861</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-1 place-items-center mt-4 text-gray-700">
        <p class="text-justify md:text-center md:px-32 text-xs">
          A bridge is a solid connection between two places that enable the flow
          of people through whatever medium of transport they use. Brijje
          enables cashflow for individuals through the medium of transport; the
          app they use.
        </p>
        <p class="md:p-20 pl-8 pr-8 text-justify md:text-center text-xs">
          Brijje &copy;{{ year }}.
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
  components: {},
};
</script>

<style scoped>
.bgImg {
  background: url("../assets/images/World_Connection _Two Color.svg") no-repeat
    center center;
  border-radius: 10px;
}

#menu-toggle:checked + #menu {
  display: block;
}
</style>
