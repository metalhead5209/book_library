const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/public', (req, res) => {
    console.log("IT WORKED!")
    res.render('/public/index');
})

app.listen(8080, () => {
    console.log("ON PORT 8080");
})

