const Wine = require('../models/Wine')

const seedData = require('./seed.json')

Wine.deleteMany({}).then(()=>{
    Wine.create(seedData).then(wineList =>{
        console.log(wineList)
        process.exit()
    })
})