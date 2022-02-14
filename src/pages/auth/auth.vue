<template>
  <div class="auth mt-200">
    <logo class="auth_logo mb-12"/>
    <div class="auth_text mb-36">
      More than just one repository.
      This is our digital world.
    </div>
    <x-button class="auth_button" @click="getCode" :btnText="'Authorize with github'">
    </x-button>
  </div>
</template>

<script>
import env from '../../env.js'
import { button } from '../../components/button'
import { logo } from '../../components/logo'

export default {
  components: {
    xButton: button,
    logo
  },
  methods: {
    getCode() {
      const githubAuthApi = "https://github.com/login/oauth/authorize"
      const params = new URLSearchParams();
      params.append('client_id', env.clientId);
      params.append('scope', 'repo admin:repo_hook user:follow')
      // params.append('client_secret', clientSecret)
      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code")
    if (code) {
      try {
        const response = await fetch("https://webdev-api.loftschool.com/github", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            clientId: env.clientId, code, clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json();
        console.log(token);
        localStorage.setItem("token", token)
        this.$router.replace({ name: "feeds" })
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
<style lang="scss" src="./auth.scss" scoped></style>
