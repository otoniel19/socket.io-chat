const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const _ = require("lodash")

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html")
})

let mess = []
let users = []

io.sockets.on("connection", socket => {
  socket.emit("loadMsg",mess)
  socket.on("sendMsg", msg => {
  
    users.push({ nome: msg.nome, id: msg.id })
   
    let username = _.find(users,{ id: msg.id }).nome
 
    const data = require('./data.js')()
    
    mess.push(`[${data}](${username}): ${msg.msg}`)
   
    io.sockets.emit("receiveMsg", `[${data}](${username}): ${msg.msg}`)

  })
})


server.listen(process.env.PORT)