const Home = window.httpVueLoader('./components/Home.vue')
const Panier = window.httpVueLoader('./components/Panier.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Pacman = window.httpVueLoader('./components/Pacman.vue')
const Memory = window.httpVueLoader('./components/Memory.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/panier', component: Panier },
  { path: '/register', component: Register },
  { path : '/memory', component: Memory },
  { path : '/pacman', component: Pacman }
]

const router = new VueRouter({
  routes
})

//memory
/*let app = new Vue({
  el: '#app',
  data:{
    memoryCards: [],
    flippedCards: [],
          cards: [
              {
                  name: 'Apple',
                  img: 'apple.gif',

              },
              {
                  name: 'Banana',
                  img: 'banana.gif',

              },
              {
                  name: 'Orange',
                  img: 'orange.jpg',

              },
              {
                  name: 'Pineapple',
                  img: 'pineapple.png',

              },
              {
                  name: 'Strawberry',
                  img: 'strawberry.png',

              },
              {
                  name: 'watermelon',
                  img: 'watermelon.jpg',

              },
          ],
  },
  created(){
    this.cards.forEach((card) => {
        Vue.set(card,'isFlipped',false)
    });

 this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards)));
 this.cards.forEach((card) => {
  Vue.set(card,'isFlipped',false);
  Vue.set(card,'isMatched',false);
});
},


  methods:{
    flipCard(card){
      card.isFlipped = true;
  
      if(this.flippedCards.length < 2)
          this.flippedCards.push(card);
      if(this.flippedCards.length === 2)    
          this._match(card);
  },
  
  _match(card){
  
      if(this.flippedCards[0].name === this.flippedCards[1].name)
          this.flippedCards.forEach(card => card.isMatched = true);
      else
          this.flippedCards.forEach(card => card.isFlipped = false);
      
      this.flippedCards = [];
  },
  }
});*/




var app = new Vue({
  router,
  el: '#app',
  data: {
    games: [],
    comments: [],
    isConnected:false
  },
  async mounted () {
    const res = await axios.get('/api/games')
    this.games = res.data

    const res2 = await axios.get('/api/comments')
    this.comments = res2.data
  },
 
  methods: {
    async addComment (comment) {
      const res = await axios.post('/api/comment', comment)
      this.comments.push(res.data)
    },
    async editComment (newcomment) {
      await axios.put('/api/comment/' + newcomment.id, newcomment)
      const comment = this.comments.find(a => a.id === newcomment.id)
      comment.title = newcomment.title
      comment.description = newcomment.description
      comment.rate = newcomment.rate
    },
    async deleteComment (commentId) {
      await axios.delete('/api/comment/' + commentId)
      const index = this.comments.findIndex(a => a.id === commentId)
      this.comments.splice(index, 1)
    }
  }
})