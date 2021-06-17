<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="g-signin2" ref="googleSignInButton" data-onsuccess="onSuccess"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    renderButton () {
      console.log('About to render google button')
    },
    onSuccess () {
      console.log('SuccessfulLogin')
    },
    onFailure () {
      console.log('FailedLogin')
    }
  }
}
</script>
