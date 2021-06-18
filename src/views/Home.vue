<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="flex-center">
      <GoogleLoginBtn
        @onSignInSuccess="signInSuccess"
        @onSignInError="signInError"
      />
    </div>
  </div>
</template>

<script>
import GoogleLoginBtn from '@/components/GoogleLoginBtn'

export default {
  name: 'Home',
  components: { GoogleLoginBtn },
  methods: {
    signInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log(profile.getId())
    },
    signInError (error) {
      console.log(error)
    }
  }
}
</script>
<style>
  .flex-center {
    display: flex;
    justify-content: center;
  }

  .g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #fff;
    box-shadow: 0 3px 0 #0f69ff;
    font-weight: bold;
    cursor: pointer;
  }

  span.icon {
    background: url('https://developers.google.com/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
  }
</style>
