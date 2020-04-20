const path = require('path')
const express = require('express')
const chalk = require('chalk')
const hbs = require('hbs')

const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
const app = express()
const port = process.env.PORT || 3000

//set handlebar view engine and view path
app.set('view engine', 'hbs')
app.set('views', viewPath)

hbs.registerPartials(partialPath)

//set up static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: "Home Page",
        body: "Andrew J"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'About page'
    })
})


app.get('/weather', (req, res)=>{
    res.send('<h1>Weather</h1>')
})

app.get('*', (req, res) => {
    res.send('Page not found')
})

app.listen(port, ()=>{
    console.log(chalk.green.inverse('Server is up on port 3000'))
})

