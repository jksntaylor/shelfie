module.exports = {
    getInventory(req, res) {

        let db = req.app.get('db')

        db.get_inventory().then( dbRes => {
            res.status(200).send(dbRes)
        })
    },

    addProduct (req, res) {
        
        let db = req.app.get('db')

        let {productName, price, imageUrl} = req.body
        
        db.add_product(productName, price, imageUrl).then(() => {
            res.sendStatus(200)
        })
    },

    deleteProduct (req, res) {

        let db = req.app.get('db')

        let {id} = req.params

        db.delete_product(id).then(() =>{
            res.sendStatus(200)
        })

    },

    updateProduct (req, res) {

        let db = req.app.get('db');

        let {id} = req.params

        let {productName, price, imageUrl} = req.body

        db.update_product(id, productName, price, imageUrl).then(() => {
            res.sendStatus(200)
        })
    }
}