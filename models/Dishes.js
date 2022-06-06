const mongoose = require('../db/connection')

const dishSchema = new mongoose.Schema({
    "Dish": String,
    "Price": Number,
    "Pairings": [
        {"ref": 'Wine',
         "type": mongoose.Schema.Types.ObjectId
        }
    ]
})

module.exports = mongoose.model('Dish', dishSchema)