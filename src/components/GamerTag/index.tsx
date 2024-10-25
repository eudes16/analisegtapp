import useTema from '@/data/hooks/useTema';
import { IconArrowDown, IconArrowUp, IconHistoryToggle, IconStar, IconStarFilled, IconStarHalfFilled, IconTrophy } from '@tabler/icons-react';
import Image from 'next/image';
import { FC, useState } from 'react';

interface GamerTagProps {
    user: any
}

const GamerTag: FC<GamerTagProps> = (props) => {
    const { corDestaque } = useTema();
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const { user } = props;
    return (
        <div className="flex flex-col  p-2 bg-zinc-800 mb-2 rounded-md">
            <div className="flex gap-4 w-full">
                <div className='flex w-96 flex-row items-centergap-1'>
                    <Image
                        width={100}
                        height={100}
                        src={user.imageUrl}
                        className="h-14 w-14 rounded-full" alt="" />
                    <div className="flex flex-full flex-col ml-2">
                        <p className="text-white">{user.gamerTag}</p>
                        <p className="text-gray-400 text-xs">{user.name}</p>
                    </div>
                </div>
                <div className="flex justify-between w-full gap-2">
                    <div className="flex flex-col flex-full justify-center items-center text-xs">
                        Análise Máfia
                        <div className='flex'>
                            <IconStarFilled className="text-orange-400" size={16} />
                            <IconStarFilled className="text-orange-400" size={16} />
                            <IconStarFilled className="text-orange-400" size={16} />
                            <IconStar size={16} />
                            <IconStar size={16} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-full justify-center items-center text-xs">
                        Análise Comunidade
                        <div className='flex'>
                            <IconStarFilled className="text-orange-400" size={16} />
                            <IconStarHalfFilled className="text-orange-400" size={16} />
                            <IconStar size={16} />
                            <IconStar size={16} />
                            <IconStar size={16} />
                        </div>
                    </div>
                    <div className="flex flex-full justify-center items-center">
                        <div className='flex'>
                            <span className='text-4xl'>{Number(user.gamerScore).toLocaleString()}</span>
                            <div className='flex rounded-full bg-zinc-700 p-1 h-6 w-6 items-center justify-center'>G</div>
                        </div>
                    </div>
                    <div className="flex flex-full items-center justify-center">
                        <button 
                            className="rounded-full p-4 bg-zinc-800 hover:bg-zinc-700 trasnsition duration-300"
                            onClick={toggleOpen}
                        >
                            {!open ? <IconArrowDown size={16} /> : <IconArrowUp size={16} />}
                        </button>
                    </div>
                </div>
            </div>
            {open && <div className="
                flex flex-col bg-zinc-900 mt-2 rounded-md h-96 overflow-y-auto scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
                trasnsition duration-300 scrollbar-thin
            ">
                {user.achievements?.map((achievement: any) => {
                    return (
                        <div key={achievement.id} className="flex flex-row p-2 border-b border-zinc-800 h-full">
                            <Image
                                width={100}
                                height={100}
                                src={achievement.game.displayImage}
                                className="h-14 w-14 rounded-md" alt="" />
                            <div className="flex flex-1 flex-col ml-2">
                                <p className="text-white">{achievement.game.name}</p>
                                <div className="flex text-xs gap-8">
                                    <div className='flex flex-col justify-center min-w-40'>
                                        Game Score: {achievement.currentGamerscore}/{achievement.totalGamerscore}
                                        <div className="flex flex-col w-full h-1 border border-zinc-500 rounded-sm">
                                            <div
                                                title={`${achievement.progressPercentage}%`} 
                                                className={`flex bg-${corDestaque} h-full  rounded-sm items-center justify-center`} style={{ width: `calc(${achievement.progressPercentage}%)`}}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <IconTrophy size={12}/> {achievement.currentAchievements}
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <IconHistoryToggle size={12}/>
                                        {`${new Date(achievement.lastTimePlayed).toLocaleDateString()}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
  );
}

export default GamerTag;