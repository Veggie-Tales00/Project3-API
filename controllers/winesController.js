const express = require("express");
const Wines = require("../models/Wine");

const router = express.Router();

// GET all wines /wines
router.get('/', (req, res) => {
    Wines.find({})
        .then(wines => res.status(200).json({ wines: wines }))
})

// GET single wine by notes /wines/:notes
// router.get('/:notes', (req, res) => {

// })

// GET singlewine by producer, variety, and vintage /wines/:producer:variety:vintage
router.get('/:producer:variety:vintage', (req, res) => {
    Wines.find({
        Producer: req.params.producer,
        Variety: req.params.variety,
        Vintage: req.params.vintage
    })
        .then(wine => res.status(200).json({ wine: wine }))
})

// POST add new wine /wines
router.post('/', (req, res) => {
    const data = req.body;
    Wines.create(data)
        .then(wine => res.status(201).json({ wine: wine }))
})

// PATCH update wine /wines/:producer:variety:vintage
router.patch('/:producer:variety:vintage', (req, res) => {
    Wines.find({
        Producer: req.params.producer,
        Variety: req.params.variety,
        Vintage: req.params.vintage
    })
        .then(wine => {
            const id = wine._id;
            const data = req.body;
            Wines.findByIdAndUpdate(id, data, { new: true })
                .then(wine => res.status(200).json({ wine: wine }))
        })
})

// Delete wine /wines/::producer:variety:vintage
router.delete('/:producer:variety:vintage', (req, res) => {
    Wines.find({
        Producer: req.params.producer,
        Variety: req.params.variety,
        Vintage: req.params.vintage
    })
        .then(wine => {
            const id = wine._id;
            Wines.findByIdAndDelete(id)
                .then(() => res.status(204))

        })

})


module.exports = router;