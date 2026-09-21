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

    sendTesteNotification: async (req,res) => {
        try{

            await pushService()

            res.status(200).json({
                message:'Notificação enviada!'
            })
        } catch(error){
            res.status(500).json({
                message: error.message
            })
        }
    }
}