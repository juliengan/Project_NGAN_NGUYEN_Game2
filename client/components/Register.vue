<template>
<div class="center">
  <div class="topnav">
    <h2>Register</h2><br>
    <form @submit.prevent="addUser()" class="form-container">
      <input v-model="email" placeholder="email">
      <input v-model="pseudo" placeholder="pseudo">
      <input type="password" v-model="password" placeholder="password">
      <br><br>
      <button type="submit">Create account</button>
    </form>

    <h2>Already member ?</h2>
    <form @submit.prevent="loginUser()" class="form-container">
      <input v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <br><br>
      <button type="submit">Connection</button>
    </form>
  </div>
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
input,button{
  background-color:#111;
  color:blanchedalmond;

}

h2{
  text-shadow: 4px 3px 0px #85864d, 9px 8px 0px rgba(0,0,0,0.15);
}
</style>