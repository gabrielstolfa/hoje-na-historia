const webpush = require('web-push')
const subscriptionService = require('./subscriptionService')

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

async function sendNotification(event) {

  const subscriptions = await subscriptionService.getSubscriptions()

  if (subscriptions.length === 0) {
    throw new Error('Nenhuma subscription encontrada!')
  }

  const payload = JSON.stringify({
    title: 'Hoje na História!',
    body: event.event.preview
  })

  for (const subscription of subscriptions) {
  const pushSubscription = {
    endpoint: subscription.endpoint,

    keys: {
      p256dh: subscription.p256dh,
      auth: subscription.auth
    }
  }

  try {
    const response = await webpush.sendNotification(
      pushSubscription,
      payload
    )

    console.log('📨 Push enviado!')
    console.log('Status do push:', response.statusCode)

  } catch (error) {

    if (error.statusCode === 404 || error.statusCode === 410) {
      console.log('🗑️ Subscription expirada. Removendo...')

      await subscriptionService.deleteSubscription(
        subscription.endpoint
      )

      continue
    }

    console.log('❌ Erro ao enviar push:', error.message)
  }
}
}

module.exports = sendNotification