const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const app = express();

app.set('port', 4001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','pug');
app.use(require('./Routes/Routes'));

app.listen(app.get('port'), () => {
    console.log("Servidor abierto en el puerto 4001");
});