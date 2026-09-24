import { useEffect, useState } from "react"
import Card from "./components/card/Card"

export default function App() {
  const [prev, setPrev] = useState('')
  const [fullEvent, setFullEvent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getEvent() {
      try {
        const response = await fetch(
          'https://hoje-na-historia-api.onrender.com/events'
        )

        if (!response.ok) {
          throw new Error('Erro ao buscar evento')
        }

        const data = await response.json()

        setPrev(data.event.preview)
        setFullEvent(data.event.fullEvent)

      } catch (error) {
        setPrev(error.message)
        setFullEvent('')

      } finally {
        setLoading(false)
      }
    }

    getEvent()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando evento de hoje...</p>
      </div>
    )
  }

  return (
    <Card
      prev={prev}
      fullEvent={fullEvent}
    />
  )
}