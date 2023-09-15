require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models.js')
const PORT = process.env.PORT || 5000
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandlingMiddleware.js')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//error processing
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
         app.listen(PORT, () => console.log(`norm port - ${PORT}`))
    }
    catch(e) {
        console.log(e)
    }
}

start()
