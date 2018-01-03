const bodyParser =require('body-parser');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mevn').then(() => console.log('conectado a db'))
.catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('servidor en el puerto', app.get('port'));
})