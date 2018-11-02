const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
const port = process.env.APP_PORT;



app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('We hear drums, drums in the deep. They are coming.')
})


app.listen(port, () => {
    console.log('the government can f**king hear us on port', port);
})