require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cron = require('node-cron')
const router = require('./routes')
const eventService = require('./services/eventService')
const pushService = require('./services/pushService')
const pool = require('./database')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

cron.schedule('0 8 * * *', async () => {

  const event = eventService()

  if (!event) {
    console.log('Nenhum evento!')
    return
  }

  console.log('Evento encontrado!', event)

  try {

    await pushService(event)

    console.log('Notificação automática enviada!')

  } catch (error) {

    console.log('Erro ao enviar notificação:', error.message)

  }

}, {
  timezone: 'America/Sao_Paulo'
})
const PORT = process.env.PORT || 3000

pool.query('SELECT NOW()')
  .then(result => {
    console.log('Banco conectado!')
    console.log(result.rows)
  })
  .catch(error => {
    console.log('Erro ao conectar no banco:', error.message)
  })

app.listen(PORT, ()=> console.log('Servidor iniciado!'))