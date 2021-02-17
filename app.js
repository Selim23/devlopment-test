const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const url = "https://api.publicapis.org/entries";

const ejs= require('ejs');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public'))); 


app.get('/', (req, res) => 	
	{res.render('index' )});

app.get('/items', (req,res) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        res.json(data)
    })
    .catch(err => console.log(err))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listining on port ${port} `))