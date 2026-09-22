require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes')
const pool = require('./database')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const PORT = process.env.PORT || 3000

pool.query('SELECT NOW()')
  .then(result => {
    console.log('Banco conectado!')
    console.log(result.rows)
  })
  .catch(error => {
    console.log('Erro ao conectar no banco:', error.message)
  })

app.listen(PORT, () => {
  console.log('Servidor iniciado!')
})