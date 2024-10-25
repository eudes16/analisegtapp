import useToggle from "@/data/hooks/useToggle";
import Flex from "./Flex";
import { IconPaint, IconX } from "@tabler/icons-react";
import SeletorDeCor from "./SeletorDeCor";
import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
    const [mostraSeletor, toggleMostraSeletor] = useToggle(false);

    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <div onClick={toggleMostraSeletor} className="cursor-pointer">
                {mostraSeletor ? <IconX /> : <IconPaint />}
            </div>
            {mostraSeletor ? <SeletorDeCor /> : null}
        </Flex>
    );
}
