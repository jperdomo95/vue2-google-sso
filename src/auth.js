const authInit = () => {
  window.onSuccess = (googleUser) => {
    const profile = googleUser.getBasicProfile()
    const idToken = googleUser.getAuthResponse().id_token
    console.log(`ID: ${profile.getId()}`)
    console.log(`IDToken: ${idToken}`)
    console.log(`Name: ${profile.getName()}`)
    console.log(`Email: ${profile.getEmail()}`)
  }
}

export default authInit
