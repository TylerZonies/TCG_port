const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/connection.js');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('*', (req, res) => res.sendFile(path.resolve('views', 'build', 'index.html'));
app.use(express.static(path.join(__dirname, 'views/build')));

mongoose.connect(db.db).catch((reason) => {
    console.log('could not connect to database for ' + reason);
}).then((connection) => {
    console.log(connection.connectionOptions);
});
require('./routes/apiRoutes')(app);

const port = process.env.PORT || 6969;

app.listen(port, (e) => {
    if(e) throw e;
    console.log('server listening on port:' + port);
});