/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import useBoolean from "../hooks/useBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";
import { MenuSecao } from "../models/MenuSecao";
import secoesMenu from "../constants/secoesMenu";
import useAuth from "../hooks/useAuth";

const ContextoMenu = createContext({} as any)


export function MenuProvider(props: any) {
    const {  } = useAuth()
    const [mini, toggleMini, miniTrue] = useBoolean(false);
    const tamanho = useTamanhoJanela();
    const [secoes, setSecoes] = useState<any>(secoesMenu);

    const router = useRouter();
    
    useEffect(() => {
        if(tamanho === "sm" || tamanho === "md") {
            miniTrue();
        }
    }, [tamanho]);
    
    useEffect(() => {
        function selecionarItem(url: string) {
            let novasSecoes = secoes.map((secao: any) => {
                let novosItens = secao.itens.map((item: any) => {
                    return {...item, selecionado: item.url === url}
                })
                return {...secao, itens: novosItens}
            }) 
            return novasSecoes
        }
    
        setSecoes(() => selecionarItem(router.asPath))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

    function alternarSecao(secaoSelecionada: MenuSecao) {
        let novasSecoes = secoes.map((secao: MenuSecao) => {
            if (secao.titulo === secaoSelecionada.titulo) {
                return {...secao, aberta: !secao.aberta}
            } else {
                return secao
            }
        })
        setSecoes(() => novasSecoes)
    }

    function selecionarItem(url: string) {
        let novasSecoes = secoes.map((secao: any) => {
            let novosItens = secao.itens.map((item: any) => {
                return {...item, selecionado: item.url === url}
            })
            return {...secao, itens: novosItens}
        }) 
        return novasSecoes
    }

    const ctx = {secoes, mini, toggleMini, alternarSecao}

    return <ContextoMenu.Provider value={ctx} >
        {props.children}
    </ContextoMenu.Provider>
}

export default ContextoMenu