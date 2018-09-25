// import auth from './routes/auth';
// import index from './routes/index.js';
const index = require('./routes/index')
// je déclare l'ensemble des librairies nécessaires
const  http  =  require('http');
const  path  =  require('path');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  express  =  require('express');
const  app  =  express();
const cors = require('cors');

// je configure l'application
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
  });

// use route 
app.use('/api', index);

// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  5000, function(){
  console.log('Listening on port '  +  server.address().port);
});