const express = require('express');
const path = require('path');
const { extraindoDatabase } = require('./controller')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/dados/:ordenacao', extraindoDatabase);

app.get('/visualizar/:ordenacao', (req, res) => {
    res.render('visualizar', { ordenacao: req.params.ordenacao });
})

module.exports = app;