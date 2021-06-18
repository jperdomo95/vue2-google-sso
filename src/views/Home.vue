<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="flex-center">
      <g-signin-button
        :params="googleSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError"
      >
        <span class="icon"></span>
        <span>Sign in with Google</span>
      </g-signin-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      googleSignInParams: {
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
      }
    }
  },
  mounted () {
    console.log(process.env.VUE_APP_GOOGLE_CLIENT_ID)
  },
  methods: {
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log(profile.getId())
    },
    onSignInError (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>
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
