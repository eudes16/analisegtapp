import SessionStorage from "@/commons/SessionStorage";
import { createContext, useState } from "react";

interface AuthProviderProps {
    children: any
}

interface AuthContextData {
    token: string
    user: any
    setToken: (token: string) => void
    setUser: (user: any) => void
    logOut: () => void
}

const ContextoAuth = createContext<AuthContextData>({} as any)

export function AuthProvider(props: AuthProviderProps) {
    const [token, setToken] = useState<string>('')
    const [user, setUser] = useState<any>(null)

    
    const logOut = () => {
        SessionStorage.removeItem('token')
        SessionStorage.removeItem('user')
        setToken('')
        setUser(null)
    }


    const ctx = { setToken, setUser, user, token, logOut }

    return <ContextoAuth.Provider value={ctx} >
        {props.children}
    </ContextoAuth.Provider>
}

export default ContextoAuth