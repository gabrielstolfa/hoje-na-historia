self.addEventListener('push', (event) => {
  console.log('Push recebido!')

  event.waitUntil(
    (async () => {
      try {
        const data = event.data.json()

        await self.registration.showNotification(data.title, {
          body: data.body
        })

      } catch (error) {
        console.error('Erro na notificação:', error)
      }
    })()
  )
})

self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ NOTIFICAÇÃO CLICADA!')

  event.notification.close()

  event.waitUntil(
    self.clients.openWindow('https://hoje-na-historia.onrender.com')
  )
})