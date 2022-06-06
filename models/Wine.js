const mongoose = require('../db/connection')

const wineSchema = new mongoose.Schema({
    "Type": String,
    "Variety": String,
    "Producer": String,
    "Vintage": Number,
    "Price": {
        "Bottle": Number,
        "Glass": Number
    },
    "Notes": [String],
    "Pairings": [
        {"ref": 'Food',
         "type": ObjectId
        }
    ]
})

module.exports = mongoose.model('Wine', wineSchema)