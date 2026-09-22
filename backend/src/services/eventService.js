const events = require('../eventsData')

function getEvent() {
  const date = new Date()

  const parts = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: 'numeric',
    month: 'numeric'
  }).formatToParts(date)

  const day = Number(
    parts.find(part => part.type === 'day').value
  )

  const month = Number(
    parts.find(part => part.type === 'month').value
  )

  const eventToSend = events.find((e) => {
    return e.day === day && e.month === month
  })

  return eventToSend
}

module.exports = getEvent