<template>
<div>
    <h2>Register</h2>
    <form @submit.prevent="addUser()">
      <input v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <button type="submit">Se créer un compte</button>
    </form>
<div>
    <h2>Already member</h2>
    <form>
      <input placeholder="email/pseudo" required>
      <input  placeholder="password" required>
      <button>Login</button>
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
      password:''
     // pseudo:"",
      //isConnected:false
    }
  },
  async mounted () {
  },
  methods: {
    async addUser () {
    await axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    },
    /*loginUser (email, password, pseudo) {
      this.$emit('login-user',email,password, pseudo)
    }*/
    
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