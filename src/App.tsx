import { Check, Rocket, X } from "lucide-react"
import { Notification } from "./Notification"
function App() {
  return (
    <div className='bg-black h-screen flex justify-center place-items-center'>
      <div className="w-1/3">
        <div className="flex justify-between p-4 bg-zinc-800">
          <span className="text-white">Notificações</span>
          <span className="text-emerald-400">Marcar todas como vista</span>
        </div>
        <p className="text-zinc-400 p-3">
          Recentes
        </p>
        <div className="space-y-1 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para começar os seus estudos em React" />
            <Notification.Actions>
              <Notification.Action onClick={() => console.log("BTN:: 1")} icon={X} className="dark:bg-emerald-400 dark:hover:bg-emerald-500" />
              <Notification.Action onClick={() => console.log("BTN:: 2")} icon={Check} />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para começar os seus estudos em React" />
            <Notification.Actions>
              <Notification.Action onClick={() => console.log("BTN:: 1")} icon={X} className="dark:bg-emerald-400 dark:hover:bg-emerald-500" />
              <Notification.Action onClick={() => console.log("BTN:: 2")} icon={Check} />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  )
}

export default App
