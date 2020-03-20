const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', (req, res) => {
    Product.find({}, function(err, foundProducts) {
        res.json(foundProducts)
    })
})

router.get('/:productId', (req, res) => {
    const productId = req.params.productId
    Product.findById(productId, function(err, foundProducts) {
        if (err) {
            res.status(422).send({
                errors: [{
                    title: 'Product error',
                    detail: 'Product not found!'
                }]
            })
        }

        res.json(foundProducts)
    })
})

module.exports = router