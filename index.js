//--Set up
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = 5000
const app = express()
app.use(morgan('dev'))
app.use('', express.static(path.join(__dirname, 'public')))

//--Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
    extended: true
}))

//--View engine
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

//--Routes setup
const homeRouter = require('./routes/home')
const voicenoteRouter = require('./routes/voicenote')
const voicenoteViewRouter = require('./routes/voicenote_view')
const checklistRouter = require('./routes/checklist')
const checklistUpdateRouter = require('./routes/checklist_update')
const translationRouter = require('./routes/translation')
//--Routes
app.use('/', homeRouter)
app.use('/home', homeRouter)
app.use('/voicenote', voicenoteRouter)
app.use('/voicenote_view', voicenoteViewRouter)
app.use('/checklist', checklistRouter)
app.use('/checklist_update', checklistUpdateRouter)
app.use('/translation', translationRouter)

app.listen(PORT, () => {
    console.log(`server is listening on localhost:${PORT}!\n`)
})