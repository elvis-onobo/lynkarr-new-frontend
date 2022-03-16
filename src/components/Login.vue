
<template>
  <div class="font-sans">
    <nav class="p-2 flex items-center place-content-between">
      <div class="w-24 visible md:invisible">
        <img src="../assets/images/tcn-logono-bg.png" />
      </div>
      <!-- <div class="item-right invisible md:visible">
        <ul class="flex space-x-2">
          <li>Login</li>
          <li>About Us</li>
        </ul>
      </div> -->

      <!-- Mobile Menu: Hide On Big Screens -->
      <div class="w-24 visible md:invisible">
        <fa icon="bars" class="bg-purple-200 p-4 rounded-md" />
      </div>
    </nav>
    <div class="md:grid place-items-center">
      <div class="container">
        <div class="grid gap-1 h-screen place-items-center">
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
              <p class="text-5xl font-bold">Buy Assets The Easy Way</p>
              <blockquote class="text-sm">
                There's only one way to eat an elephant:
                <strong>a bit at a time</strong> - Desmond Tutu.
              </blockquote>
              <div class="space-x-2 text-white mt-2">
                <button class="p-2 bg-black rounded-md hover:bg-gray-100">
                  Register
                </button>
                <button class="p-2 bg-black rounded-md hover:bg-gray-100">
                  Login
                </button>
              </div>
            </div>
            <div>
              <img src="../assets/logo.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid place-items-center mt-4 bg-slate-50">
      <div class="container">
        <div class="grid place-items-center p-8">
          <p class="text-3xl">Why AssetifyMe?</p>
          <p class="text-center">
            It can be really hard to buy lands and houses upfront, but it is
            really easy to buy lands and houses in installments. With
            AssetifyMe.com you can now buy lands and houses from the most
            reliable real estate companies in Nigeria at
            <strong>no extra cost</strong>. Our platform allows you to make
            payments installmentally in a way that suits your budget and takes
            away the pressure from you. Whether you are in Lagos, London or
            Lousiana.
          </p>
          <button
            class="p-2 bg-black text-white rounded-md hover:bg-gray-100 mt-2"
          >
            Start Buying
          </button>
        </div>
      </div>
    </div>

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
      <div class="p-5 rounded-2xl bg-slate-50">
        <div class="p-4 rounded-md">
          <fa icon="pen" class="bg-black text-white p-4 rounded-md" />
          <p class="text-3xl">Sign Up</p>
        </div>
        <p class="pl-4 pr-4">
          It all begins with a step. A decision to start and everything else
          falls in place.
        </p>
        <div class="p-4 rounded-md">
          <fa icon="arrow-right" class="bg-black text-white p-2 rounded-full" />
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-slate-50">
        <div class="p-4 rounded-md">
          <fa icon="calendar" class="bg-black text-white p-4 rounded-md" />
          <p class="text-3xl">Setup a Plan</p>
        </div>
        <p class="pl-4 pr-4">
          Setup a daily, weekly, monthly or even yearly payment plan for the
          asset you want.
        </p>
        <div class="p-4 rounded-md">
          <fa icon="arrow-right" class="bg-black text-white p-2 rounded-full" />
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-slate-50">
        <div class="p-4 rounded-md">
          <fa icon="house" class="bg-black text-white p-4 rounded-md" />
          <p class="text-3xl">Claim Your Asset</p>
        </div>
        <p class="pl-4 pr-4">
          Claim your asset and all documents on completion of payment.
        </p>
        <div class="p-4 rounded-md">
          <fa icon="arrow-right" class="bg-black text-white p-2 rounded-full" />
        </div>
      </div>
    </div>
  </div>

  <div class="grid place-items-center rounded-lg p-4 v-screen align-middle m-6">
    <div class="grid place-items-center">
      <p class="md:text-2xl text-sm p-4 font-serif">
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

  <div class="md:grid gap-1 m-10 p-10 rounded-md place-items-center">
    <div>
      <p class="md:text-2xl text-xs text-center">
        All your payments are processed and secured by
      </p>
    </div>
    <div>
      <img src="../assets/images/paystack.png" />
    </div>
  </div>

  <div
    class="
      md:grid
      place-items-center
      justify-between
      rounded-lg
      md:p-4
      v-screen
      align-middle
      m-6
    "
  >
    <div
      class="
        md:grid md:grid-cols-5
        grid-cols-2
        gap-1
        content-center
        p-4
        text-xs
      "
    >
      <div>
        <img src="../assets/images/tcn-logono-bg.png" class="w-24" />
      </div>

      <div class="">
        <p class="font-bold">Products</p>
        <a href="http://">PayBanner</a>
      </div>

      <div class="">
        <p class="font-bold">Company</p>
        <p><a href="http://">About</a></p>
        <p><a href="http://">FAQs</a></p>
        <p><a href="http://">Blog</a></p>
      </div>

      <div class="">
        <p class="font-bold">Legal</p>
        <p><a href="http://">Terms and Conditions</a></p>
        <p><a href="http://">Privacy</a></p>
        <p><a href="http://">Security</a></p>
      </div>

      <div class="">
        <p class="font-bold">Let's Get Social</p>
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

    <div class="grid gap-1 place-items-center">
      <p class="md:p-20 pl-8 pr-8 text-center text-sm">
        AssetifyMe is the leading property marketing and payment collection
        platform in Nigeria. We operate in partnership with the elite property
        firms to bring you the best deals and the ability to pay for them fast
        and conveniently. AssetifyMe is a property of DigitalBoss Africa,
        registered with the Corporate Affairs Commision of Nigeria with
        registration number RC3300055.
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
