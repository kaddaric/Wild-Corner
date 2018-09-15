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
  const article = req.body.article ? req.body.article : "";
  const localisation = req.body.position ? req.body.position : "";
  const valueMin = req.body.prix ? parseInt(req.body.prix.split(',')[0], 10) : null;
  const valueMax = req.body.prix ? parseInt(req.body.prix.split(',')[1], 10) : null;
  const priceRange = valueMin ? `prix BETWEEN ${valueMin} AND ${valueMax}` : "";
  console.log(valueMin);
  console.log(priceRange, `AND prix BETWEEN ${valueMin} AND ${valueMax}`);
  console.log(`SELECT * FROM Objets WHERE article LIKE '%${article}%' AND position LIKE '%${localisation}%' AND ${priceRange};`);
  
  
  connection.query(`SELECT * FROM Objets WHERE article LIKE '%${article}%' AND position LIKE '%${localisation}%' AND ${priceRange};`, function(error, results, fields) {
    if (error) {
      console.log("error : ", error);
      res.sendStatus(500);
    }
    else {     
      res.send(results);
    }  
  });
});

module.exports = router;