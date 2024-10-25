import MenuPrincipal from './MenuPrincipal'
import Flex from './Flex'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'


interface PaginaProps {
    titulo?: string
    subtitulo?: string
    children?: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
            flex h-screen w-screen
            bg-zinc-900 text-white
            overflow-y-auto
        `}>
            <MenuPrincipal />
            <Flex col className={`flex-1 p-7 h-full overflow-y-auto
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 trasnsition duration-300
            scrollbar-thin`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </Flex>
        </div>
    )
}