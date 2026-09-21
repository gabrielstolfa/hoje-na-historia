const pool = require('../database')

async function saveSubscription(subscription) {

  const { endpoint, keys } = subscription

  await pool.query(
    `
    INSERT INTO subscriptions (endpoint, p256dh, auth)
    VALUES ($1, $2, $3)
    ON CONFLICT (endpoint) DO NOTHING
    `,
    [endpoint, keys.p256dh, keys.auth]
  )

}

async function getSubscriptions() {

  const result = await pool.query(
    'SELECT * FROM subscriptions'
  )

  return result.rows
}

module.exports = {
  saveSubscription,
  getSubscriptions
}