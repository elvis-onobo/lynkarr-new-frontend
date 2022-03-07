
<template>
  <div class="grid place-items-center">
    <div class="container">
      <div class="grid grid-cols-2 gap-1 font-serif place-items-center h-screen">
        <div class="place-items-center center-center p-6 m-6">
          <p class="text-5xl bg-gradient-to-tr to-violet-600 font-bold">Give Your Customers all the Options</p>
          <p class="text-1xl mt-2">
            Setup multiple payment methods with just the click of a button instead of multiple lines of code.
          </p>
          <button class="p-2 bg-purple-600 text-white rounded-md hover:bg-fuchsia-600 mt-2">Register</button>
        </div>

        <div class="place-items-center center-center flex">
          <div class="rounded-full p-20 bg-purple-600"></div>
          <div class="rounded-full p-20 bg-pink-600"></div>
        </div>
      </div>


      <div class="grid place-items-center bg-gray-100 rounded-lg p-4 v-screen align-middle m-6">
        <div class="grid place-items-center">
          <p class="text-2xl p-4 font-serif">
            Receive payments with these and more... From one convenient stack
          </p>
        </div>
        <div class="grid grid-cols-3 gap-2 justify-between content-center">
          <div>
            <img src="../assets/images/flutterwave.png" class="w-80" />
          </div>
          <div>
            <img src="../assets/images/paystack.png" class="w-80" />
          </div>
          <div>
            <img src="../assets/images/voguepay.svg" class="w-60" />
          </div>
        </div>
      </div>

      <div class='grid grid-cols-3 gap-4 place-items-center m-6 font-serif'>
        <div class='p-5 rounded-2xl bg-gray-100'>
          <div class='p-4 rounded-md'>
            <fa icon="pen" class='bg-purple-200 p-4 rounded-md' /> 
            <p class='text-3xl'>Sign Up</p>
          </div>
          <p class='pl-4 pr-4'>
           It all begins with a step. A decision to start and everything else falls in place.
          </p>
          <div class='p-4 rounded-md'>
            <fa icon="arrow-right" class='bg-pink-200 p-2 rounded-full' /> 
          </div>
        </div>

        <div class='p-5 rounded-2xl bg-gray-100'>
          <div class='p-4 rounded-md'>
            <fa icon="box" class='bg-purple-200 p-4 rounded-md' /> 
            <p class='text-3xl'>Activate a Service</p>
          </div>
          <p class='pl-4 pr-4'>
            Activate any of the payment services that you woul like your custoners to be able to use.
          </p>
          <div class='p-4 rounded-md'>
            <fa icon="arrow-right" class='bg-pink-200 p-2 rounded-full' /> 
          </div>
        </div>

        <div class='p-5 rounded-2xl bg-gray-100'>
          <div class='p-4 rounded-md'>
            <fa icon="money-bill" class='bg-purple-200 p-4 rounded-md' /> 
            <p class='text-3xl'>Receive Payments</p>
          </div>
          <p class='pl-4 pr-4'>
            Sit back, relax, and watch the money come in on one sleek dashboard.
          </p>
          <div class='p-4 rounded-md'>
            <fa icon="arrow-right" class='bg-pink-200 p-2 rounded-full' /> 
          </div>
        </div>
      </div>

      <div class="grid place-items-center bg-gray-100 rounded-lg p-4 v-screen align-middle m-6">
        <div class="grid grid-cols-2 gap-1 content-center">
          <div class="grid place-items-center">
            <p class="text-2xl p-4 font-serif">
              Join the waitlist
            </p>
          </div>
          <div>
            <form class="">
              <input text="" class="rounded-md p-2 mr-2" placeholder="E-mail" />
              <input text="" class="rounded-md p-2 mr-2" placeholder="Name" />
              <button class="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mt-2">Join</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
