const express = require("express")

const app = express()

let port = 9000

let data = [

]

app.use(express.urlencoded())

app.set("view engine", "ejs")

app.get()


app.get("/delete/:id", (req,res) => {
    let userId = req.params.id
    data = data.filter((ele) => ele.id != userId)
    res.redirect('/')
    // console.log(req.params.id)
})

app.post('/insert', (req,res) => {
    data.push(req.body)
    res.redirect('/')
    // console.log(req.body)

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