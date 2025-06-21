const express = require("express")

const app = express()

let port = 9000

let data = [

]

app.use(express.urlencoded())

app.set("view engine", "ejs")


app.get("/delete", (req,res) => {
    let userId = req.query.id
    data = data.filter((ele) => ele.id != userId)
    res.redirect('/')
})

app.post('/insert', (req,res) => {
    data.push(req.body)
    res.redirect('/')
})

app.get('/', (req,res) => {
    res.render("form", {
        task : data
    })
})

app.listen(port, (err) => {
    if(err){
        console.log("server is no connected...")
        return false;
    }
    console.log("Server is connected to port " + port)
})