console.log('ciao')

const postsList = require('./posts.js')

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json({postsList})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})