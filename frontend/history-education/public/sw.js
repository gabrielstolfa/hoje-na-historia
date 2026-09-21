self.addEventListener('push', (event) => {
  console.log('Push recebido!')

  event.waitUntil(
    (async () => {
      try {
        const data = event.data.json()

        console.log('Dados recebidos:', data)

        await self.registration.showNotification(data.title, {
          body: data.body
        })

        console.log('showNotification executado com sucesso!')
      } catch (error) {
        console.error('Erro na notificação:', error)
      }
    })()
  )
})