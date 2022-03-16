
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
        <div class="grid gap-1 place-items-center">
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
              <p class="text-5xl font-bold">Buy Assets the Easy Way</p>
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
              <img src="../assets/images/couble-buying-house.jpg" />
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

    <div class="grid h-52  mt-4 rounded-lg items-center place-items-center">
      <p class="text-5xl font-extrabold p-10 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Start owning an asset with as little as &#8358;1000
      </p>
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

  <div class="md:grid md:grid-cols-4 md:gap-2 text-center p-8 rounded-md place-items-center space-y-4 md:space-y-0">
    <div class="bg-slate-100 rounded-md p-8">
      <p class="font-bold">Buy in Bits</p>
      <p class="text-justify text-sm">
        Pay for lands and houses in bits according to your budget daily, weekly, monthly or even yearly
        with automatic deductions.
      </p>
    </div>

    <div class="bg-slate-100 rounded-md p-8">
      <p class="font-bold">Asset Padi</p>
      <p class="text-justify text-sm">
        Herness the power of working as a group. Invite your friends, form a clique and purchase assets together.
      </p>
    </div>

    <div class="bg-slate-100 rounded-md p-8">
      <p class="font-bold">Spot Swap</p>
      <p class="text-justify text-sm">
        If you are in a fix and need money ASAP, you can swap your spot on the system automatically.
      </p>
    </div>
    
    <div class="bg-slate-100 rounded-md p-8">
      <p class="font-bold">Agent A</p>
      <p class="text-justify text-sm">
        Refer your friends and family and if
        they buy a property from any of our partners AssetifyMe, you will receive a commission.
      </p>
    </div>
  </div>

  <div class="md:grid gap-1 m-10 p-10 rounded-md place-items-center">
    <div>
      <p class="md:text-2xl text-xs text-center">
        All payments are processed and secured by
      </p>
    </div>
    <div>
      <img src="../assets/images/paystack.png" />
    </div>
  </div>

  <footer class="text-xs m-10">
    <div class="grid grid-cols-2 md:grid-cols-5 space-y-2 md:space-y-0 items-center md:items-start text-center">
      <div class="grid col-span-2 md:col-span-1 place-items-center">
        <img src="../assets/images/assetifyme-logo.png" class="w-24" />
      </div>

      <div>
        <p class="font-bold">Products</p>
        <p>Buy in Bits</p>
        <p>Asset Padi</p>
        <p>Spot Swap</p>
        <p>Agent A</p>
      </div>

      <div>
        <p class="font-bold">Company</p>
        <p><a href="http://">About</a></p>
        <p><a href="http://">FAQs</a></p>
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
    <div class="grid gap-1 place-items-center mt-2">
      <p class="md:p-20 pl-8 pr-8 md:text-center text-sm text-justify">
        AssetifyMe is the leading property marketing and property payment collection
        platform in Nigeria. We operate in partnership with the elite property
        firms to bring you the best deals and the ability to pay for them fast
        and conveniently. AssetifyMe is a property of DigitalBoss Africa,
        registered with the Corporate Affairs Commision of Nigeria with
        registration number RC3300055.
      </p>
    </div>
  </footer>



</template>

<script>
</script>

<style scoped>
.bgImg {
  background: url("../assets/images/naira.jpeg") no-repeat center center;
  border-radius: 10px;
}
</style>
