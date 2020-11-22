<template>
  <div class="center" >
    <div class="games" >
    <game v-for="game in games" :key="game.id" class ="body" >
      <div id="pumpmyshopbag">
      <!--Image-->
      <div class="game-img"><div :style="{ backgroundImage: 'url(' + game.image + ')' }"></div></div>

      <!--Content-->
      <div class="game-content">
        <div class="game-title"><h2>{{ game.title }}</h2><br></div>
          <h3> Your best score : {{game.score}} points</h3>
          <div class ="boutons"><button >Play</button><button>Rate</button></div>
        <p>{{ game.description }}</p>
      </div>

      </div>
    </game>
    </div>

<!--comments-->
              <div class="row">
                <div class="pacmanimg" style="height:200px;"></div>
                <comment v-for="comment in comments" :key="comment.id" class ="body" >
                  <div class="leftcolumn">
                    <div class="card">
                     <div class="comment-content">
                          <p>User : {{ comment.pseudo }} said about {{ comment.title }} game :<p>{{ comment.description }}</p>
                          <p> Rate : {{comment.rate}} </p></div>
                  </div>
                </comment>
                  <form @submit.prevent="addcomment">
                    <h2>Comment</h2>
                    <input type="text" v-model="newcomment.title" placeholder="Title your comment" required>
                    <input type="number" v-model="newcomment.rate" placeholder="Rate over 6" required>
                    <textarea type="text" v-model="newcomment.description" required></textarea>
                    <button type="submit">Publish</button>
                  </form>
               </div>

    <div class="rightcolumn">
        <div class="card">
            <h2>About Me</h2>
            <div class="fakeimg" style="height:100px;">Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>

        <div class="card">
            <h3>Popular Post</h3>
                            <div class="fakeimg"><p>Image</p></div>
                            <div class="fakeimg"><p>Image</p></div>
                            <div class="fakeimg"><p>Image</p></div>
                        </div>
                        <div class="card">
                            <h3>Follow Me</h3>
                            <p>Some text..</p>
                        </div>
    </div>
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
        pseudo:'',
        title: '',
        description: '',
        rate: 0
      },
      editinggame: {
        id: -1,
        pseudo:'',
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

/*test comments template thao*/
/* Create two unequal columns that floats next to each other */
    /* Left column */
    .leftcolumn {
        float: left;
        width: 70%;
    }

    /* Right column */
    .rightcolumn {
        float: left;
        width: 30%;
        background-color: black;
        padding-left: 20px;
    }

    /* Fake image */
    .fakeimg {
        background-color: #aaa;
        width: 100%;
        padding: 20px;
    }

    .pacmanimg {
        background-image: url("https://www.rts.ch/2019/12/05/10/57/1784333.image/16x9/scale/width/400");
        opacity: 0.6;
        filter: alpha(opacity=40);
        width: 100%;
    }
    


    /* Add a card effect for articles */
    .card {
        background-color: black;
        padding: 20px;
        margin-top: 20px;
        color: #696969;
    }

    /* Clear floats after the columns */
    .row:after {
        /*content: "";*/
        display: table;
        clear: both;
    } 


input,textarea{
  color:#ced1dd;
}

.games, .comments{
  display: flex;
  flex-wrap: wrap;
}

.games{
  width:100%;
  height:100%;
  margin:10px 20px 20px;

}

.games game:hover{
  z-index: 1;
}


comment{
   border:solid  #1a2f80;
}

comment p{
  border-color : black;
  margin-bottom : 5px;
  padding : 5px;
 
  text-align : center;
  font-size: 14px;
  font-family: 'OCR A';
  
}

game h2, p{
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
  /*padding : 5px;*/
  text-align : center;
  font-family: 'OCR A';
 

  border-radius: 10% 30% 50% 70%;  
  padding : 9px;
  }
  /*game:hover{
    opacity: 0.9;
  }*/
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
  /*font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #1a2f80;
  border : solid;
  border-style : dashed;*/
  padding : 2px;
  border-radius: 10% 30% 50% 70%;  
  }

.game-img {
  flex: 1;
 margin-left: auto;
    margin-right: auto;
    opacity:0.5;
    
}
.game-img:hover{
  opacity: 0.9;
}

.game-img div {
border-radius: 10% 30% 50% 70%;  
width: 200px;
  height: 200px;
  background-size: cover;
   margin-left: auto;
    margin-right: auto;
}

.game-content {
  flex: 3;
  text-align : center;
  border-radius: 10% 30% 50% 70%;  


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