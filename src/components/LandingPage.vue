<script>
export default {
  name: 'LandingPage',
  data(){
    return {
      date: new Date().getFullYear(),
    }
  }
}
</script>

<template>
  <div class="grid place-items-center h-screen bg-gray-600 center-center font-normal bgImg">
    <div class="grid place-items-center">
      <div class="m-2 grid place-items-center">
        <img class="" src="../assets/images/tcn-logono-bg.png" />
        <p class="text-2xl text-white">Welcome to</p>
        <p class="text-5xl text-orange-600 font-bold">The Covenant Nation</p>
        <p class="text-2xl text-white">Analytics Platform</p>
      </div>
      <form class="mt-2">
          <input type="email" name="email" placeholder="E-mail" class="p-2 mr-2 rounded-sm" autofocus/>
          <input type="password" name="password" class="p-2 mr-2 rounded-sm" placeholder="Password"/>
          <button class="bg-orange-600 hover:bg-gray-600 rounded-sm p-2 text-white">
            Login
          </button>
      </form>
      <p class="text-white mt-12">&copy; {{date}}, The Covenant Nation </p>
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  background: url('../assets/images/tcn.jpg') no-repeat center center
}
</style>
