self.addEventListener('push', (event) => {

  console.log('Push recebido!')

  const data = event.data.json()

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body
    })
  )

})