const express = require('express')
var cors = require('cors')

//import routers
const fileRouter = require('./src/routes/file')

//initialize express and it's ports
const app = express()
const port = 3010

//JSON handling
app.use(express.json())

//Route handling
app.use('/file',fileRouter)

//Listen Port
app.listen(port, () => {
    console.log('Server running at port ' + port)
})