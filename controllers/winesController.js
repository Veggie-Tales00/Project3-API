const express = require("express");
const Wines = require("../models/Wine");

const router = express.Router();

// GET all wines /wines
router.get('/', (req, res) => {
    Wines.find({})
        .then(wines => res.status(200).json({ wines: wines }))
})

// GET single wine by producer wines/:producer
router.get('/:producer', (req, res) => {
    Wines.find({ Producer: req.params.producer })
        .then(wine => res.status(200).json({ wine: wine }))
})

// GET wines by type wines/:type
router.get('/:type', (req, res) => {
    Wines.find({ Type: req.params.type })
        .then(wine => res.status(200).json({ wine: wine }))
})

// POST add new wine /wines
router.post('/', (req, res) => {
    const data = req.body;
    Wines.create(data)
        .then(wine => res.status(201).json({ wine: wine }))
})

// PATCH update wine /wines/:producer:variety:vintage
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Wines.findByIdAndUpdate(id, data, { new: true })
        .then(Wines.find({})
            .then(wines => res.status(200).json({ wines: wines }))
        )
})


// Delete wine /wines/::producer:variety:vintage
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Wines.findByIdAndDelete(id)
        .then(() => res.status(204)).then(() => {
            Wines.find({}).then((items) => {
                res.status(200).json({ items: items })
            })
        })


})


module.exports = router;