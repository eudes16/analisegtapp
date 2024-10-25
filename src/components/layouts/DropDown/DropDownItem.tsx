import { FC } from 'react';

interface DorpDownItemProps {
    selected: boolean
    value?: any
    children?: any
    onClick: (value: any) => void
}

const DorpDownItem: FC<DorpDownItemProps> = (props) => {
    const { value, onClick, children, selected} = props;

    return (
        <div 
            className={`
                flex hover:bg-zinc-800 hover:text-zinc-100 cursor-pointer p-2 rounded-md trasnsition duration-300 text-white
                ${selected ? "bg-zinc-100 font-black text-zinc-900" : ""}`}
            onClick={() => onClick(value)}
        >
            {children} 
        </div>
    );
}

export default DorpDownItem;