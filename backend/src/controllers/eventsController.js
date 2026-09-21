const eventService = require('../services/eventService')
const subscriptionService = require('../services/subscriptionService')
const pushService = require('../services/pushService')


module.exports = {
    // GET /event
    getEvent: (req,res) => {
        const event = eventService()
       
        if(!event){
            return res.status(400).json({message:'Nenhum evento encontrado pra hoje!'})
        }

        res.status(200).json(event)
    },

    // POST /subscriptions
   subscriptions: async (req, res) => {

  try {

    const subscription = req.body

    if (!subscription?.endpoint || !subscription?.keys) {
      return res.status(400).json({
        message: 'Subscription inválida!'
      })
    }

    await subscriptionService.saveSubscription(subscription)

    res.status(201).json({
      message: 'Subscription salva!'
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: 'Erro ao salvar subscription!'
    })

  }
},

 // POST /notifications/test
sendTesteNotification: async (req, res) => {
    try {
        const event = eventService()

        if (!event) {
            return res.status(404).json({
                message: 'Nenhum evento encontrado para hoje!'
            })
        }

        await pushService(event)

        return res.status(200).json({
            message: 'Notificação enviada!'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
},

    // POST /notifications/daily
   sendDailyNotification: async (req, res) => {
    console.log('🔥 ENDPOINT DAILY FOI CHAMADO!')

    try {
        const secret = req.headers.authorization

        if (secret !== `Bearer ${process.env.CRON_SECRET}`) {
            console.log('❌ CRON_SECRET inválido')

            return res.status(401).json({
                message: 'Não autorizado!'
            })
        }

        console.log('✅ CRON_SECRET correto')

        const event = eventService()

        if (!event) {
            return res.status(404).json({
                message: 'Nenhum evento encontrado para hoje!'
            })
        }

        console.log('📚 Evento encontrado:', event.event.preview)

        await pushService(event)

        console.log('🔔 pushService terminou')

        return res.status(200).json({
            message: 'Notificação diária enviada!'
        })

    } catch (error) {
        console.log('❌ ERRO DAILY:', error)

        return res.status(500).json({
            message: 'Erro ao enviar notificação!'
        })
    }
}
}
