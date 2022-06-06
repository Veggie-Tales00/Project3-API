const express = require("express");
const Dishes = require("../models/Dishes");

const router = express.Router();

// GET all dishes /dishes
router.get('/', (req, res) => {
    Dishes.find({})
        .then(dishes => res.status(200).json({ dishes: dishes }))
})

// GET single dishes /dishes/:dish
router.get('/:dish', (req, res) => {
    Dishes.find({ Dish: req.params.dish })
        .then(dish => res.status(200).json({ dish: dish }))
})

// POST add new dish /dishes/:dish
router.post('/', (req, res) => {
    const data = req.body;
    Dishes.create(data)
        .then(dish => res.status(201).json({ dish: dish }))
})

// PATCH update dish /dishes/:dish
router.patch('/:dish', (req, res) => {
    Dishes.find({ Dish: req.params.dish })
        .then(dish => {
            const id = dish._id;
            const data = req.body;
            Dishes.findByIdAndUpdate(id, data, { new: true })
                .then(dish => res.status(200).json({ dish: dish }))
        })

})

// Delete dish /dishes/:dish
router.delete('/:dish', (req, res) => {
    Dishes.find({ Dish: req.params.dish })
        .then(dish => {
            const id = dish._id;
            Dishes.findByIdAndDelete(id)
                .then(() => res.status(204))
        })
})


module.exports = router;