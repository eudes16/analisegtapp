'use client'
import { Inter } from "next/font/google";
import Pagina from "@/components/layouts/Pagina";
import Logo from "@/components/layouts/Logo";
import { useEffect, useState } from "react";
import SessionStorage from "@/commons/SessionStorage";
import useAuth from "@/data/hooks/useAuth";
import Modal from "@/components/layouts/Modal";
import { IconTrash } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [open, setOpen] = useState(false);
    const {setToken, setUser} = useAuth()

    useEffect(() => {
        const user = SessionStorage.getItem("user", true)
        const token = SessionStorage.getItem("token")

        if (user && token) {
            setToken(token)
            setUser(user)
        } else {
            setToken("")
            setUser(null)
        }
    }, [setToken, setUser])

    return (
        <>
            <Pagina>
                <Logo grande col title="Analise de GT Máfia Caixista" subtitulo="Vamos ver se você é um 'Joga nada', 'Garapeiro' ou um 'Mafioso'"></Logo>
                <button onClick={() => setOpen(true)}>Modal</button>
            </Pagina>
            <Modal open={open} onClose={() => setOpen(false)} >
                <div className="text-center w-56">
                    <IconTrash size={56} className="mx-auto text-red-500" />
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-black text-zinc-400">
                            Confirmar exclusão
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Você tem certeza que deseja excluir esse item?
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
}
