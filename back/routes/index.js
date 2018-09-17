const express = require('express');
const connection = require('../helpers/db');
const router = express.Router();

// Get all articles
router.get('/objets', function(req, res, next) {
  connection.query('SELECT * FROM Objets;', function(error, results, fields) {
    if (error) {console.log("error : ", error)}
    else {      
      res.send(results); 
    }   
  });
});

// Get my articles
router.get('/myarticles', function(req, res, next) {
  connection.query('SELECT * FROM Objets WHERE id_propriétaire = 1;', function(error, results, fields) {
    if (error) {console.log("error : ", error)}
    else {      
      res.send(results); 
    }   
  });
});

// Add an article
router.post('/myarticles/add', function (req, res, next) {  
  connection.query('INSERT INTO Objets SET ?', req.body, function (error, results, fields) {
    if (error) {
      console.log("error : ", error);
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200)
    }
  });
})

// Delete an article
router.put('/myarticles/delete', function (req, res, next) {  
  connection.query(`DELETE FROM Objets WHERE id='${req.body.id}'`, function (error, results, fields) {
    if (error) {
       console.log("error : ", error);
       res.sendStatus(500);
      }
    else {
      res.sendStatus(200)
    }
  });
})

// Search an article
router.put('/search', function(req, res, next) {
  const article = req.body.article ? req.body.article : null;
  const selectArticle = article ? `article LIKE '%${article}%'`: "1"; 

  const localisation = req.body.position ? req.body.position : null;
  const selectLocalisation = localisation ? `position LIKE '%${localisation}%'`: "1";

  const valueMin = req.body.prix ? parseInt(req.body.prix.split(',')[0], 10) : null;
  const valueMax = req.body.prix ? parseInt(req.body.prix.split(',')[1], 10) : null;
  const priceRange = valueMin ? `prix BETWEEN ${valueMin} AND ${valueMax}` : "1";

  const immobilier = req.body.Immobilier ? "Immobilier" : "1";
  const vetement = req.body.Vetement ? "Vetement" : "1";
  const bricolage = req.body.Bricolage ? "Bricolage" : "1";
  const jeu = req.body.Jeu ? "Jeu - Jouet" : "1";
  const selecCategory = req.body.Immobilier || req.body.Vetement || req.body.Bricolage || req.body.Jeu ? `categorie IN ('${immobilier}', '${vetement}', '${bricolage}', '${jeu}')` : "1";
  
  connection.query(`SELECT * FROM Objets WHERE ${selectArticle} AND ${selectLocalisation} AND ${priceRange} AND ${selecCategory};`, function(error, results, fields) {
    if (error) {
      console.log("error : ", error);
      res.sendStatus(500);
    }
    else {     
      res.send(results);
    }  
  });
});

// Check Sign in
router.put('/signin', function(req, res, next) {  
  const login = req.body.login;
  connection.query(`SELECT login , password FROM Proprietaires WHERE login = '${login}';`, function(error, results, fields) {
    if (error) {console.log("error : ", error)}
    else {      
      req.body.password === results[0].password          
        ? res.send({
            ...results,
            logged: true
          }) 
        : res.send({
            logged: false,
            error: "identifiant incorrect",
          });
    }   
  });
});

module.exports = router;