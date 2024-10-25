import DropDown from "@/components/layouts/DropDown";
import Flex from "@/components/layouts/Flex";
import Pagina from "@/components/layouts/Pagina";
import { OrderOptions } from "@/data/constants/gamerTag";
import useAuth from "@/data/hooks/useAuth";
import useTema from "@/data/hooks/useTema";
import { Game } from "@/data/models/IGame";
import gameProvider from "@/data/providers/gameProvider";
import { IGameQuery } from "@/data/providers/gameProvider/IGame.types";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const orderOptionsGamerTag: OrderOptions<Game> = [
    {
        text: "Nome",
        value: "name"
    },
    {
        text: "Atualiado em",
        value: "updatedAt"
    },
    {
        text: "Criado em",
        value: "createdAt"
    }
]

export default function Jogos() {
    const { token } = useAuth();
    
    const { corDestaque } = useTema();
    const [jogos, setJogos] = useState<any>();
    const [gameQuery, setGameQuery] = useState<IGameQuery>({});
    const [queryController, setQueryController] = useState<any>({
        openOrder: false,
        openOrderDirection: false,
        orderField: null,
        orderDirection: null
    });

    const listarJogos = useCallback(async () => {
        try {

            const res = await gameProvider.list(gameQuery, token ?? '');
            if (res) {
                setJogos(res.data.getGames);
            }
        } catch (error) {
            console.log(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jogos, token])

    const handleOpenOrder = (open: boolean) => {
        setQueryController((prev: any) => {
            return {
                ...prev,
                openOrder: open
            }
        })
    }

    const handleOrderChange = (value: any) => {
        setGameQuery((prev: IGameQuery) => {
            const _prev = {
                ...prev,
                orderBy: [
                    {
                        field: value.value,
                        direction: prev.orderBy?.[0]?.direction ?? "ASC"
                    }
                ]
            }

            return _prev
        })
        setQueryController((prev: any) => {
            const _prev = {
                ...prev,
                orderField: value
            }

            return _prev
        })
    }


    useEffect(() => {
        listarJogos();
    }, [jogos, jogos?.page, listarJogos])

    const proximaPagina = async () => {
        if (jogos?.page?.nextPage && jogos?.page?.currentPage) {
            const _jogos: any = {
                ...jogos,
                page: {
                    ...jogos.page,
                    currentPage: jogos.page.nextPage
                }
            }
            setJogos(_jogos);
        }
    }

    const paginaAnterior = async () => {
        if (jogos?.page?.previousPage && jogos?.page?.currentPage) {
            const _jogos: any = {
                ...jogos,
                page: {
                    ...jogos.page,
                    currentPage: jogos.page.previousPage
                }
            }
            setJogos(_jogos);
        }
    }

    return <Pagina titulo="Jogos" subtitulo="Lista de jogos do XBox">
        <Flex col className="w-full h-full">
            <div className="flex flex-col bg-zinc-900 rounded-md p-2 w-full">
                <div className="pl-1">
                    {/* <button onClick={listarJogos}>Listar jogos</button> */}
                    <button
                        className={`p-2 rounded-md mx-1 bg-${corDestaque}`}
                        onClick={paginaAnterior}
                    >
                        <IconArrowLeft />
                    </button>
                    <button
                        className={`p-2 rounded-md mx-1 bg-${corDestaque}`}
                        onClick={proximaPagina}
                    >
                        <IconArrowRight />
                    </button>
                    <div className="flex">
                        <DropDown 
                            onClose={ () => handleOpenOrder(false)}
                            onOpen={ () => handleOpenOrder(true) }
                            onChange={handleOrderChange}
                            open={queryController.openOrder}
                            label="Ordenar por"
                            options={orderOptionsGamerTag}
                            value={queryController.orderField}
                        />
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start">
                    {jogos?.data?.map((jogo: any) => {
                        return <div
                            key={jogo.id}
                            className="flex flex-col w-1/3 md:w-1/4 lg:w-1/5 h-50 bg-zinc-800 rounded-md m-2"
                        >
                            <Image
                                className="rounded-t-md w-full"
                                width={300}
                                height={300}
                                src={jogo.displayImage} alt={jogo.name}
                            />
                            <div className="flex flex-col p-2 w-full h-full">
                                <p className="text-xs">{jogo.name}</p>
                                <div className="flex flex-wrap items-end">
                                    {jogo.devices.map((device: string) => {
                                        return <div key={device} className={`text-xs bg-${corDestaque} p-1 mr-1 mb-1 rounded-md items-center justify-center`}>{device}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Flex>
    </Pagina>;
}
