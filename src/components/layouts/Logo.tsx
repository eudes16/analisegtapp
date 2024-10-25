import Link from "next/link";
import { IconBrandXbox, IconFishHook, IconXboxAFilled, IconXboxBFilled, IconXboxXFilled, IconXboxYFilled } from "@tabler/icons-react";
import useTema from "@/data/hooks/useTema";
import Flex from "./Flex";

interface LogoProps {
    title?: string;
    subtitulo?: string;
    grande?: boolean;
    col?: boolean;
    className?: string;
}

export default function Logo(props: LogoProps) {
    const {corDestaque} = useTema()

    return (
        <Link href="/" className="cursor-pointer">
            <Flex col={props.col} centerCross className={props.className}>
                <div
                    className={`
                    flex justify-center items-center
                    bg-${corDestaque} rounded-lg bg-[#107b10] 
                    ${props.grande ? "w-[150px] h-[150px]" : "w-[50px] h-[50px]"}
                `}
                >
                    <IconBrandXbox size={props.grande ? 100 : 30} />
                </div>
                <Flex col centerCross gap={0}>
                    <div
                        className={`
                        ${props.grande ? "text-4xl" : "text-2xl"}
                        font-black
                    `}
                    >
                        {props?.title ?? "Analise de GT"}
                    </div>
                    {props.subtitulo && <div className="text-zinc-500 text-sm">{props.subtitulo}</div>}
                </Flex>
            </Flex>
        </Link>
    );
}
