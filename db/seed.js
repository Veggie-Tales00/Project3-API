const Wine = require('../models/Wine')
const Dish = require('../models/Dishes')

const wineData = require('./wineSeed.json')
const dishData = require('./dishSeed.json')

Wine.deleteMany({}).then(() => {
    Wine.create(wineData).then(wineList => {
        console.log(wineList)
    }).then(() => {
        Dish.deleteMany({}).then(() => {
            Dish.create(dishData).then(dishList => {
                console.log(dishList)
                process.exit()
            })
        })
    })
})

