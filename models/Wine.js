const mongoose = require('../db/connection')

const wineSchema = new mongoose.Schema({
    Name: String,
    Type: String,
    Variety: String,
    Producer: String,
    Vintage: Number,
    Price: {
        Bottle: Number,
        Glass: Number
    },
    Notes: [String],
    Pairings: [
        {ref: 'Food',
         type: mongoose.Schema.Types.ObjectId
        }
    ]
})

module.exports = mongoose.model('Wine', wineSchema)