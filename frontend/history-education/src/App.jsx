import { useEffect, useState } from "react"
import Card from "./components/card/Card"


export default function App() {

    const [prev, setPrev] =  useState('')
    const [fullEvent, setFullEvent] = useState('')
    const [loading, setLoading] = useState(false)

  

    useEffect(()=> {
       async function getEvent() {
        try {
        setLoading(true)
        const response = await fetch('http://localhost:3000/events')

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
    },[])

  return(


    <>
      {loading && <p>Buscando...</p>}
      <Card
        prev={prev}
        fullEvent={fullEvent}
      />  
    </>
  )
}