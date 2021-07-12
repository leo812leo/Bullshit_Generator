//modules
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

//set tebplate engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'handlebars')

//use body-paser
app.use(express.urlencoded({ extended: true }))

//localhost:3000
app.get('/', (req, res) => {
  // res.render('index')
  res.send('hello words')
})

app.listen(port, () => {
  console.log(`This Express serever is running http://localhost:${port}`)
})
