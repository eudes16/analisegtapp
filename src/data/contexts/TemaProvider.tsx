import { createContext, useState } from "react"

const ContextoTema = createContext({} as any)

export const TemaProvider = (props: any) => {
    const cores = [ "[#107b10]", "blue-500", "red-500", "pink-500", "orange-500", "purple-500", "yellow-500"];

    const [corDestaque, setCorDestaque] = useState<any>(cores[0])

    const ctx = {cores, corDestaque, setCorDestaque}
    return <ContextoTema.Provider value={ctx}>
        {props.children}
    </ContextoTema.Provider>
}

export default ContextoTema