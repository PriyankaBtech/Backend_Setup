import express from "express"
const app = express()

app.get('/', (req, res) => {
    res.send("Welcome !")
})

app.get('/home', (req, res) => {
    res.send("<h1>You are at Home</h1>")
})

export default app;