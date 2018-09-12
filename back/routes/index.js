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
  connection.query(`SELECT * FROM Objets WHERE article LIKE '%${req.body.article}%' UNION  SELECT * FROM Objets WHERE position LIKE '%${req.body.position}%';`, function(error, results, fields) {
    if (error) {
      console.log("error : ", error);
      res.sendStatus(500);
     }
   else {
     console.log(results);
     
     res.send(results);
   }  
  });
});

module.exports = router;