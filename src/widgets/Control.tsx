import {useState} from "react"
import {Switch} from "@headlessui/react"

type Props = {
  name: string
}

export const Control = ({name}: Props) => {
  const [enabled, setEnabled] = useState(false)

  return <div className={"flex items-center -space-x-3"}>
    <span>{name}</span>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-indigo-300" : "bg-cyan-400"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 scale-50`}
    >
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  </div>
}