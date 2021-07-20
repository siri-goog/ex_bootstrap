const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {    
    res.render('pages/checklist', {
        layout: './layouts/full-width'
    })
})

router.post('/', async (req, res) => {
    const { inputTitle, inputList } = req.body
    console.log(inputTitle)
    console.log(inputList)
})

module.exports = router