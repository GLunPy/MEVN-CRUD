const path = require('path');
const bodyParser =require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const itemRoutes = require('./routes/item')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mevn').then(() => console.log('conectado a db'))
.catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/item' ,itemRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('servidor en el puerto', app.get('port'));
})