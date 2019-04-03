//load app server using express somehow
const express = require('express')
const app = express()
const morgan = require('morgan')

//stores request logs
app.use(morgan('combined'))

 
app.get("/", (req,res) => {
    console.log("Responding to root route")
    res.send("Hello from ROOOOOT")
})

app.get("/users", (req,res) => {
    var user1 = {firstName: "Stephen", lastName:"Curry"}
    const user2 = {firstName: "Kevin", lastName:"Durant"}
    res.json([user1, user2])
    

    // res.send("Nodemon auto updates when i save this file")
})
app.listen(3003, () =>{
    console.log("Server is up and listening on 3000...")
})