const mongoose = require("../db/connection");

const wineSchema = new mongoose.Schema({
    Location: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Variety: {
        type: String,
        required: true
    },
    Producer: {
        type: String,
        required: true
    },
    Vintage: {
        type: Number,
        required: true
    },
    Price: {
        Bottle: Number,
        Glass: Number
    },
    Notes: [{
        type: String,
        required: true,
        enum: ["dense", "juicy", "citrus", "apple", "candied fruit", "oak accents", "bold", "buttery", "peach", "oaky vanilla accents", "zesty", "balanced", "green apple", "lime", "barrel spice accent", "vibrant", "refreshing", "tropical", "passion fruit", "melon", "grapefruit accents", "bright", "fresh", "crispy citrus accents", "rich", "white flowers", "grassy", "mineral nose", "light body", "sweet", "white peach", "apricot", "pear", "tart", "delicate", "crisp", "lavender", "off-dry", "floral finish", "soft", "fruity", "raspberry", "strawberry", "medium bodied", "cooked apple aroma", "hints of lemon", "white pepper", "spicy", "notes of vanilla", "coconut", "oak accent", "round", "blackberry", "toasted hazelnut", "cinnamon", "vanilla", "toasted oak", "silky tannins", "plum", "blueberry", "full and soft", "black currant", "cherry", "hazelnut", "cocoa powder", "coffee accents", "fruit-forward", "mocha", "chocolate", "rustic undertones", "black cherry", "jammy", "boysenberry", "floral", "persimmon", "rich tannins", "medium finish", "dry"]
    }],
    Pairings: [{
        ref: "Food",
        type: mongoose.Schema.Types.ObjectId
    }],
});

module.exports = mongoose.model("Wine", wineSchema);




