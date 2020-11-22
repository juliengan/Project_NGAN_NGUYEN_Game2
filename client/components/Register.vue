<template>
<div>
    <h2>Register</h2>
    <form @submit.prevent="addUser()">
      <input v-model="email" placeholder="email">
      <input v-model="pseudo" placeholder="pseudo">
      <input type="password" v-model="password" placeholder="password">
      <br><br>
      <button type="submit">Create account</button>
    </form>

    <h2>Already member ?</h2>
    <form @submit.prevent="loginUser()">
      <input v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <br><br>
      <button type="submit">Connection</button>
    </form>
</div>
</template>


<script>
module.exports = {
  props: {
    
  },
  data () {
    return {
      email:'',
      password:'',
      pseudo:''
      //isConnected:false
    }
  },
  async mounted () {
  },
  methods: {
    async addUser () {
    await axios.post('/api/register', {
        email: this.email,
        password: this.password,
        pseudo: this.pseudo
      })
      this.$router.push('/')
    },
    async loginUser() {
      await axios.post('/api/login', {
        email: this.email,
        password: this.password,
        pseudo: this.pseudo
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
*{
    font-family : 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
input,button,h2{
  color:blanchedalmond;

}
</style>