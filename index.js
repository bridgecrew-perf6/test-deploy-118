const express = require('express')
const studentRoutes = require('./src/student/routes')

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use('/api/v1/students', studentRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})

