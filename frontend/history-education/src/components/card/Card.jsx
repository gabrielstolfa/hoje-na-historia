import { useState } from "react"

export default function Card({ prev, fullEvent, loading }) {

  const [open, setOpen] = useState(false)

  async function activateNotifications() {
    try {
      // 1. Pede permissão
      const permission = await Notification.requestPermission()

      if (permission !== 'granted') {
        console.log('Permissão de notificação não concedida!')
        return
      }

      // 2. Pega o Service Worker
      const registration = await navigator.serviceWorker.ready

      // 3. Verifica se já existe uma subscription
      let subscription = await registration.pushManager.getSubscription()

      // 4. Se não existir, cria
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'BPZ8EiRCaNll-Z0sO51nhqXc_NlNdIv8eUQxzqM_1xZGOW5XB8cyN63NT6D2nh82xyBhEzeoyVBXOnJsyQMFbGI'
        })
      }

      // 5. Envia a subscription para o backend
      const response = await fetch(
        'https://hoje-na-historia-api.onrender.com/subscriptions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subscription)
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao salvar subscription')
      }

      const data = await response.json()

      console.log(data)
      console.log('Notificações ativadas!')

    } catch (error) {
      console.error('Erro ao ativar notificações:', error)
    }
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-200 flex items-center justify-center px-6 py-12">

      {/* Fundo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#292524_0%,_#0c0a09_60%)]" />

      <article
        className="
          relative z-10
          w-full max-w-3xl
          border border-amber-900/40
          bg-stone-900/80
          backdrop-blur-sm
          rounded-xl
          px-8 py-10 md:px-14 md:py-14
          shadow-2xl
          animate-[fadeIn_0.8s_ease-out]
        "
      >

        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-amber-800/50" />

          <span className="text-amber-600 text-xs tracking-[0.35em] uppercase">
            Arquivo Histórico
          </span>

          <div className="h-px flex-1 bg-amber-800/50" />
        </div>

        <h1
          className="
            text-center
            text-4xl md:text-5xl
            font-serif font-bold
            text-amber-500
            mb-10
          "
        >
          Hoje na História
        </h1>

        {/* Preview */}



              <h2
        className="
          text-xl md:text-2xl
          font-serif
          leading-relaxed
          text-stone-100
          text-center
        "
      >
        {loading ? (
          <span className="text-stone-400 animate-pulse">
            Buscando o acontecimento de hoje...
          </span>
        ) : (
          prev
        )}
      </h2>

        {/* Botão abrir história */}
        
        {!loading && (
  <div className="flex justify-center mt-10">
    <button
      onClick={() => setOpen(!open)}
      className="
        border border-amber-700
        text-amber-500
        px-6 py-3
        rounded-md
        text-sm
        tracking-wider
        uppercase
        cursor-pointer
        transition-all
        duration-300
        hover:bg-amber-600
        hover:text-stone-950
        hover:shadow-[0_0_25px_rgba(217,119,6,0.25)]
        hover:-translate-y-1
      "
    >
      {open ? "Fechar história ↑" : "Conhecer a história →"}
    </button>
  </div>
)}
       

        {/* História completa */}
        <div
          className={`
            grid
            transition-all
            duration-700
            ease-in-out
            ${
              open
                ? "grid-rows-[1fr] opacity-100 mt-10"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >

          <div className="overflow-hidden">

            <div className="w-16 h-px bg-amber-700 mb-8" />

            <p
              className="
                text-stone-400
                text-base md:text-lg
                leading-8
              "
            >
              {fullEvent}
            </p>

            {/* Ativar notificações */}
            <button
              onClick={activateNotifications}
              className="
                mt-5
                text-stone-500
                hover:text-amber-500
                cursor-pointer
                transition-colors
              "
            >
              🔔 Receber eventos diariamente
            </button>

            <footer className="mt-12 pt-6 border-t border-stone-800">

              <p
                className="
                  text-xs
                  tracking-widest
                  uppercase
                  text-stone-600
                "
              >
                Um acontecimento do passado
              </p>

            </footer>

          </div>

        </div>

      </article>

    </main>
  )
}