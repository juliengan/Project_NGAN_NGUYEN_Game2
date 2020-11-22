const express = require('express')
const router = express.Router()
const games = require('../data/games.js')
const comments = require('../data/comments.js')

const bcrypt = require('bcrypt')
const { Client } = require('pg')
const { values } = require('../data/games.js')


const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: '2377674',
 port: 5433,
 database: 'Game2'
})

const player = []
client.connect()

client.query('SELECT * from player', (err,res)=>{
  console.log(err,res)
  //client.end()
})





/**
 * Dans ce fichier, vous trouverez des exemples de requêtes GET, POST, PUT et DELETE
 * Ces requêtes concernent l'ajout ou la suppression d'games sur le site
 * Votre objectif est, en apprenant des exemples de ce fichier, de créer l'API pour le panier de l'utilisateur
 *
 * Notre site ne contient pas d'authentification, ce qui n'est pas DU TOUT recommandé.
 * De même, les informations sont réinitialisées à chaque redémarrage du serveur, car nous n'avons pas de système de base de données pour faire persister les données
 */

router.get('/register',(req,res) => {

  client.query('SELECT * from player', (err,result)=>{
    console.log(err,result)
    //client.end()
  })
  res.render("get request successfully executed")
})



/**Cette route permet à l'utisateur de se connecter */
router.post('/login',async(req,res) =>{
  console.log("begin your authentification")
  const email = req.body.email
  const password = req.body.password
  const pseudo = req.body.pseudo
  var id = null
  var hash_pw = null
  const sql = 'SELECT * FROM player WHERE email=$1 AND password=$2 AND pseudo=$3'
  console.log("let's check if you are registered:")
  var result = await client.query({
    text: sql,
    values: [email, password, pseudo]
  })

  console.log("let's check if you are registered:before if")
  const hash = await bcrypt.hash(password, 10) //hash le mot de passe
  console.log(password, hash)
  if(await bcrypt.compare(password, hash)){ 
    console.log("we found you")
    this.isConnected = true
    //req.session.userId = 
    //console.log(id)
    } 
  else {
    console.log("Wrong authentification")
    res.json.status(401)({message:'Wrong authentification'})
  }

  const sql2 = 'SELECT * FROM player WHERE id=$1'
  console.log("let's check if you are registered:userId")
  const result2 = await client.query({
    text: sql2,
    values: [req.session.userId]
  })
  
  console.log('Successfully registered : ',result.rows)
  //console.log('Successfully registered : ',result2.rows)
})

/**Cette route  retourne
simplement l’utilisateur actuellement connecté
 */
router.get('/me',async(req,res) =>{
  console.log(this.isConnected)
  /*if(this.isConnected == true){
    
  }*/
})

/**register*/
router.post('/register', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const result = await client.query({
    text: 'SELECT * FROM player WHERE email=$1',
    values: [email]
  })

  if (result.rows.length > 0) {
    res.status(401).json({
      message: 'user already exists'
    })
    return
  }
  // si on a pas trouvé l'utilisateur
  // alors on le crée

  const hash = await bcrypt.hash(password, 10)

  await client.query({
    text: `INSERT INTO player(email, password)
    VALUES ($1, $2)
    `,
    values: [email, hash]
  })
  res.send('ok')
})

/**
 * Cette route envoie l'intégralité des jeux du site
 */
router.get('/games', (req, res) => {
  res.json(games)
})

/**
 * Cette route envoie l'intégralité des commentaires du site
 */

router.get('/comments', (req, res) => {
  res.json(comments)
})

/** Cette route crée et publie un commentaire.*/
router.post('/comment', (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const rate = parseInt(req.body.rate)

  // vérification de la validité des données d'entrée
  if (typeof title !== 'string' || title === '' ||
      typeof description !== 'string' || description === '' ||
      isNaN(rate) || rate <= 0) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  const comment = {
    id: comments.length + 1,
    title: title,
    //pseudo:pseudo,
    description: description,
    rate: rate
  }
  comments.push(comment)
  // on envoie l'game ajouté à l'utilisateur
  res.json(comment)
})

/**
 * Cette fonction fait en sorte de valider que le commentraire demandé par l'utilisateur
 * est valide. Elle est appliquée aux routes:
 * - GET /comment/:commentId
 * - PUT /comment/:commentId
 * - DELETE /comment/:commentId
 * Comme ces trois routes ont un comportement similaire, on regroupe leurs fonctionnalités communes dans un middleware
 */
function parsegame (req, res, next) {
  const commentId = parseInt(req.params.commentId)

  // si commentId n'est pas un nombre (NaN = Not A Number), alors on s'arrête
  if (isNaN(commentId)) {
    res.status(400).json({ message: 'commentId should be a number' })
    return
  }
  // on affecte req.commentId pour l'exploiter dans toutes les routes qui en ont besoin
  req.commentId = commentId

  const comment = comments.find(a => a.id === req.commentId)
  if (!game) {
    res.status(404).json({ message: 'comment ' + commentId + ' does not exist' })
    return
  }
  // on affecte req.game pour l'exploiter dans toutes les routes qui en ont besoin
  req.comment = comment
  next()
}

router.route('/comment/:commentId')
  /**
   * Cette route envoie un game particulier
   */
  .get(parsegame, (req, res) => {
    // req.game existe grâce au middleware parsegame
    res.json(req.comment)
  })

  /**
   * Cette route modifie un game.
   * WARNING: dans un vrai site, elle devrait être authentifiée et valider que l'utilisateur est bien autorisé
   * NOTE: lorsqu'on redémarre le serveur, la modification de l'game disparait
   *   Si on voulait persister l'information, on utiliserait une BDD (mysql, etc.)
   */
  .put(parsegame, (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const rate = parseInt(req.body.rate)

    req.comment.title = title
    req.comment.description = description
    req.comment.rate = rate
    res.send()
  })

  .delete(parsegame, (req, res) => {
    const index = comments.findIndex(a => a.id === req.commentId)

    comments.splice(index, 1) // remove the game from the array
    res.send()
  })

module.exports = router
