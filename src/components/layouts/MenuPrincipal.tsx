import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import { IconExclamationCircle, IconLogin, IconMenu, IconX } from "@tabler/icons-react";
import useMenu from "@/data/hooks/useMenu";
import Flex from "./Flex";
import Logo from "./Logo";
import AuthProvider from "@/data/providers/AuthProvider";
import useAuth from "@/data/hooks/useAuth";
import User from "../User";
import { useState } from "react";
import Modal from "./Modal";
import useTema from "@/data/hooks/useTema";
import { useRouter } from "next/router";



export default function MenuPrincipal() {
    const router = useRouter()
    const { corDestaque } = useTema()
    const [open, setOpen] = useState(false);
    const { logOut } = useAuth();
    
    const { user } = useAuth()

    const {secoes, mini, toggleMini, alternarSecao} = useMenu()

    const handleClick: any = async () => {
        const xboxAuthUrl = await AuthProvider.getXboxAuthUrl()
        window.location.href = xboxAuthUrl
    }
    
    function renderizarSecoes() {
        return secoes?.map((secao: MenuSecao) => (
            <MenuPrincipalSecao 
                key={secao.titulo} 
                titulo={secao.titulo} 
                mini={mini} 
                aberta={secao.aberta}
                onClick={() => {
                    alternarSecao(secao)
                }}
            >
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
                selecionado={item.selecionado ?? false}
            />
        ));
    }

    function renderUserCard(user: any) {
        return <>
            <User user={user} onClick={() => {
                setOpen(true)
            }} />
        </>
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            trasnsition duration-300
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={toggleMini}>
                    {mini ? (
                        <IconMenu size={24} />
                    ) : (
                        <IconX size={24} />
                    )}
                </div>
            </Flex>
            <nav className="flex flex-grow flex-col gap-4 m-7">{renderizarSecoes()}</nav>
            <div className="flex gap-4 m-7">
                {!user ? <button
                    className="flex gap-4 p-2 w-full bg-zinc-800 hover:bg-zinc-700 trasnsition duration-300 rounded-md"
                    onClick={handleClick}
                >
                    <IconLogin size={24} />
                    {!mini ? <>Login</> : null}
                </button> : renderUserCard(user)}
            </div>
            <Modal open={open} onClose={() => setOpen(false)} >
                <div className="text-center w-56">
                    <IconExclamationCircle size={56} className="mx-auto text-orange-500" />
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-black text-zinc-400">
                            Confirmar logout
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Você tem certeza que deseja efetuar o logout?
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center gap-4 p-2 w-full bg-zinc-800 hover:bg-zinc-700 trasnsition duration-300 rounded-md"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                logOut()
                                setOpen(false)
                                router.push("/")
                            }}
                            className={`
                                flex items-center justify-center gap-4 p-2 w-full 
                                bg-${corDestaque} hover:bg-${corDestaque} hover:opacity-80 trasnsition duration-300 
                                rounded-md
                            `}
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </Modal>
        </aside>
    );
}
