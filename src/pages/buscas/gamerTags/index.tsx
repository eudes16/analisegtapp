import GamerTag from "@/components/GamerTag";
import DropDown, { IOptions } from "@/components/layouts/DropDown";
import Flex from "@/components/layouts/Flex";
import Modal from "@/components/layouts/Modal";
import Pagina from "@/components/layouts/Pagina";
import { orderOptionsDirection, orderOptionsGamerTag } from "@/data/constants/gamerTag";
import useAuth from "@/data/hooks/useAuth";
import userProvider from "@/data/providers/UserProvider";
import {  IconExclamationCircle } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";


const objects: IOptions[] = [
    {
        value: 1,
        text: "Gamer Tags"
    },
    {
        value: 2,
        text: "Jogos"
    },
    {
        value: 3,
        text: "Conquistas"
    }
]

export default function BuscaGamerTag() {
    const { token } = useAuth();
    const router = useRouter();
    
    const [selectValue, setSelectValue] = useState<any>(null);
    const [orderDirectionValue, setOrderDirectionValue] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [openDropDownDirection, setOpenDropDownDirection] = useState(false);
    const [users, setUsers] = useState<any>()

    const getGamerTags = useCallback(async () => {
        try {
            const res = await userProvider.list(users?.page?.currentPage || 1, token ?? '');
            if (res) {
                setUsers(res.data.getUsers);
            }
        } catch (error) {
            setOpen(true)
        }
    }, [users,token])
    
    useEffect(() => {
        getGamerTags();
    }, [users, users?.page, getGamerTags])
    
    const onCloseModal = () => {
        setOpen(false)
        router.push("/")
    }

    return (
        <Pagina titulo="Gamer Tags">
            <Flex col className="w-full h-full">
                <div className="flex flex-col bg-zinc-900 rounded-md p-2 w-full">
                    <div className="flex gap-2 mb-1">
                        <div className="flex items-end justify-end ">
                            <button className="flex items-center justify-center p-2 h-10 bg-zinc-800 hover:bg-zinc-700 trasnsition duration-300 rounded-md">
                                Buscar
                            </button>
                        </div>
                        <div className="flex items-center justify-end w-full gap-2">
                            <DropDown
                                label="Ordenar por"
                                options={orderOptionsGamerTag} 
                                className="w-32"
                                value={selectValue}
                                open={openDropDown} 
                                onChange={(_value) => {
                                    console.log(_value)
                                    setSelectValue((prevValue: any) => {

                                        return {
                                            ...prevValue,
                                            value: _value.value,
                                        } 
                                    })
                                    setOpenDropDown(!openDropDown)
                                }}
                                onClose={() => setOpenDropDown(false)}
                                onOpen={() => setOpenDropDown(true)}
                            />
                            <DropDown
                                label="Direção"
                                options={orderOptionsDirection} 
                                className="w-12"
                                value={orderDirectionValue}
                                open={openDropDownDirection} 
                                onChange={(_value) => {
                                    console.log(_value)
                                    setOrderDirectionValue((prevValue: any) => {

                                        return {
                                            ...prevValue,
                                            value: _value.value,
                                        } 
                                    })
                                    setOpenDropDownDirection(!openDropDownDirection)
                                }}
                                onClose={() => setOpenDropDownDirection(false)}
                                onOpen={() => setOpenDropDownDirection(true)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {users?.data.map((user: any) => {
                            return (<GamerTag user={user} key={user.id} />)
                        })}
                    </div>
                </div>
            </Flex>
            <Modal open={open} onClose={onCloseModal} >
                <div className="text-center w-56">
                    <IconExclamationCircle size={56} className="mx-auto text-orange-500" />
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-black text-zinc-400">
                            Atenção!
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Ocorreu um erro ao tentar acessar este recurso?
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={onCloseModal}
                            className="flex items-center justify-center gap-4 p-2 w-full bg-zinc-800 hover:bg-zinc-700 trasnsition duration-300 rounded-md"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </Modal>
        </Pagina>
    );
}
