const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const auth = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/vidly')
    .then(() => console.log('connected to the database'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', users);

app.use('/api/auth', auth);

app.use('/', function(req, res) {
    res.send('Reached here');
})

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
    if(err)
        console.log(err);
    else
        console.log(`Listening on port ${port}`);
});