const sequelize = require("./db")
const express = require("express")

const app = express()

sequelize.sync().then(()=>{ //testando a conexão
    app(3000, ()=>console.log("Banco Conectado!"))
})