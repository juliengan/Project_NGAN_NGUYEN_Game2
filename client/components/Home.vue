<template>
  <div class="center" >
    <div class="games" >
    <game v-for="game in games" :key="game.id" class ="body" >
      <div id="pumpmyshopbag">
      <!--Image-->
      <div class="game-img">
        <div :style="{ backgroundImage: 'url(' + game.image + ')' }">
        </div>
      </div>

      <!--Content-->
      <div class="game-content" v-if="editinggame.id !== game.id">
        <div class="game-title">
          <h2>{{ game.title }}</h2><br></div>
          <h3> Your best score : {{game.score}} points</h3>
          <div class ="boutons">
            <button >Play</button>
            <button>Rate</button>
          </div>
        <p>{{ game.description }}</p>
      </div>

      <!--Content else-->
      <div class="game-content" v-else>
        <div class="game-title">
          <h2><input type="text" v-model="editinggame.title"> - <input type="number" v-model="editinggame.rate"></h2>
        </div>
        <p><textarea v-model="editinggame.description"></textarea></p>     
          <input type="text" v-model="editinggame.image" placeholder="Lien vers l'image">
          <div>
            <button @click="sendEditgame()">Valider</button>
            <button @click="abortEditgame()">Annuler</button>
          </div>
        </div>
      </div>
      <!--end-->
    </game>
    </div>


<div class="comments" >
<comment v-for="comment in comments" :key="comment.id" class ="body" >
      <div id="pumpmyshopbag">
      <div class="comment-content" v-if="editinggame.id !== comment.id">
        <div class="comment-title">
          <h2>{{ comment.title }}</h2><br>
          <h3> Rate : {{comment.rate}} </h3>
        </div>
        <p>{{ comment.description }}</p>
      </div>
      <div class="comment-content" v-else>
        <div class="comment-title">
          <h2><input type="text" v-model="editinggame.title"> - <input type="number" v-model="editinggame.rate"></h2>
          
        </div>
        <p><textarea v-model="editinggame.description"></textarea></p>     
          <div>
            <button @click="sendEditgame()">Valider</button>
            <button @click="abortEditgame()">Annuler</button>
          </div>
  
      </div>
      </div>
    </comment>
</div>

  
    <form @submit.prevent="addcomment">
      <h2>Comment</h2>
      <input type="text" v-model="newcomment.title" placeholder="Title your comment" required>
      <input type="number" v-model="newcomment.rate" placeholder="Rate over 6" required>
      <textarea type="text" v-model="newcomment.description" required></textarea>
      <button type="submit">Publish</button>
    </form>
  </div>
</template>

<script>
module.exports = {
  props: {
    games: { type: Array, default: [] },
    comments: {type: Array, default: []}
  },
  data () {
    return {
      newcomment: {
        title: '',
        description: '',
        rate: 0
      },
      editinggame: {
        id: -1,
        title: '',
        description: '',
        rate: 0
      }
    }
  },
  methods: {
/*
    this.$emit("#tohide").hide();
$(".btn-group-lg").on("click", function() {
   var target = $(this).data("target");
   if(target!==undefined) $(target).toggle();
});*/
    
    }
  }

</script>

<style scoped>
.games, .comments{
  display: flex;
  flex-wrap: wrap;
}
.comment-content h2,h3,p{
  font-size: 20px;
  font-family: 'OCR A';
  text-shadow: 4px 3px 0px #1a2f80, 9px 8px 0px rgba(0,0,0,0.15);
}

comment{
  border-color : black;
  margin-bottom : 5px;
  padding : 5px;
  border:solid  #1a2f80;
  text-align : center;
}

.game-content h2, p{
  color:aliceblue
}

  * {
box-sizing: border-box;
}
body {
font-family: Roboto, Helvetica, sans-serif;
}
/* Fixer le bouton sur le côté gauche de la page */
.open-btn {
display: flex;
justify-content: left;
}
/* Stylez et fixez le bouton sur la page */
.open-button {
background-color: #1c87c9;
color: white;
padding: 12px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
opacity: 0.8;
position: fixed;
}
/* Positionnez la forme Popup */
.login-popup {
position: relative;
text-align: center;
width: 100%;
}
/* Masquez la forme Popup */
.form-popup {
display: none;
position: fixed;
left: 45%;
top:5%;
transform: translate(-45%,5%);
border: 2px solid #666;
z-index: 9;
}
/* Styles pour le conteneur de forme */
.form-container {
max-width: 300px;
padding: 20px;
background-color: #fff;
}
/* Largeur complète pour les champs de saisie */
.form-container input[type=text], .form-container input[type=password] {
width: 100%;
padding: 10px;
margin: 5px 0 22px 0;
border: none;
background: #eee;
}
/*Quand les entrées sont concentrées, faites quelque chose */
.form-container input[type=text]:focus, .form-container input[type=password]:focus {
background-color: #ddd;
outline: none;
}
/* Stylez le bouton de connexion*/
.form-container .btn {
background-color: #8ebf42;
color: #fff;
padding: 12px 20px;
border: none;
cursor: pointer;
width: 100%;
margin-bottom:10px;
opacity: 0.8;
}
/* Stylez le bouton pour annuler */
.form-container .cancel {
background-color: #cc0000;
}
/* Planez les effets pour les boutons */
.form-container .btn:hover, .open-button:hover {
opacity: 1;
}
.center {
  display: flex;
  flex-wrap: wrap;
}
game{
  border-color : black;
  margin-bottom : 5px;
  padding : 5px;
  border:solid  #ced1dd;
  text-align : center;
  opacity: 0.5;
  }
  game:hover{
    opacity: 0.9;
  }
.boutons{
display : flex;
flex-direction : column 
margin-left: auto;
margin-right: auto;
}
button{
background-color : black;
color : white;
border: 2px solid white;
}
.body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size : small;
  margin-left : auto;
  margin-right : auto;
}
button:hover{
background-color: #6d1500;
        color: #ed2794;
        border-color: #9f2407;
        color: white;
        transition: all 1s ease-out;
}

#pumpmyshopbag{
   
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /*height: 300px;
    width: 300px;
  */}

.game-img {
  flex: 1;
 margin-left: auto;
    margin-right: auto;
}

.game-img div {
  width: 200px;
  height: 200px;
  background-size: cover;
   margin-left: auto;
    margin-right: auto;
}

.game-content {
  flex: 3;
  text-align : center;

}

.game-title {
  display: flex;
  justify-content: space-between;
  margin-left : 300px;
}

textarea {
  width: 100%;
}
</style>