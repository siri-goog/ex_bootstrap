const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {    
    res.render('pages/checklist_update', {
        layout: './layouts/full-width'
    })
})

router.post('/updateStatus/:id', async (req, res) => {
    console.log(req.params.id)
})

module.exports = router