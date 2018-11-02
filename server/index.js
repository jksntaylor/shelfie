const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
const controller = require('./controller')
const port = process.env.APP_PORT || 4200 ;



app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('We hear drums, drums in the deep. They are coming.')
})

app.get('/api/inventory', controller.getInventory)
app.post('/api/inventory', controller.addProduct)
app.delete('/api/inventory/:id', controller.deleteProduct)
app.put('/api/inventory/:id', controller.updateProduct)


app.listen(port, () => {
    console.log('the government can f**king hear us on port', port);
})