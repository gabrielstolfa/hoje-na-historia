const  express = require('express')
const eventsController = require('./controllers/eventsController')

const router = express.Router()

router.get('/events', eventsController.getEvent)
router.post('/subscriptions', eventsController.subscriptions)

router.post(
  '/notifications/test',
  eventsController.sendTesteNotification
)

router.post(
    '/notifications/daily',
    eventsController.sendDailyNotification
)

module.exports = router