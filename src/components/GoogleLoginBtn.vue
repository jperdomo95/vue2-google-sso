<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError"
  >
    <span class="icon"></span>
    <span>Sign in with Google</span>
  </g-signin-button>
</template>

<script>

export default {
  data () {
    return {
      googleSignInParams: {
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      this.$emit('onSignInSuccess', googleUser)
    },
    onSignInError (error) {
      this.$emit('onSignInError', error)
    }
  }
}
</script>

<style>

</style>
