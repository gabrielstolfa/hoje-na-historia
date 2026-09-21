const  express = require('express')
const eventsController = require('./controllers/eventsController')

const router = express.Router()

router.get('/events', eventsController.getEvent)
router.post('/subscriptions', eventsController.subscriptions)
router.post(
  '/notifications/test',
  eventsController.sendTesteNotification
)

module.exports = router