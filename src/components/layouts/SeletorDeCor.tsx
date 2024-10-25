import { useContext } from "react";
import Flex from "./Flex";
import { IconCheck } from "@tabler/icons-react";
import ContextoTema from "@/data/contexts/TemaProvider";

export default function SeletorDeCor() {
    let {cores, setCorDestaque, corDestaque} = useContext(ContextoTema)
    
    let listaCores = cores.map((cor: any) => {
        return <div 
            key={cor} 
            onClick={() => setCorDestaque(cor) } 
            className={`bg-${cor} w-6 h-6 rounded-full flex justify-center items-center cursor-pointer`}
        >
            {cor === corDestaque ? <IconCheck size={16}/> : ''}
        </div>
    })

    return <Flex center className={`absolute right-3 top-20 translate duration-300`}>
        {listaCores}
    </Flex>
}