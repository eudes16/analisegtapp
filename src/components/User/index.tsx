import useAuth from '@/data/hooks/useAuth';
import { IconDoorExit } from '@tabler/icons-react';
import Image from 'next/image';
import { FC } from 'react';

interface UserProps {
    user: any
    onClick: () => void
}

const User: FC<UserProps> = (props) => {
    const { user, onClick } = props;

    return (
        <div className="flex flex-row w-full bg-zinc-900 p-2 rounded-md">
            <div className="flex flex-row w-full">
                <Image
                    width={100}
                    height={100}
                    src={user.imageUrl}
                    className="h-14 w-14 rounded-full" alt="" />
                <div className="flex flex-full flex-col ml-2">
                    <p className="text-white">{user.gamerTag}</p>
                    <p className="text-gray-400 text-xs">{Number(user.gamerScore).toLocaleString()} G</p>
                </div>
            </div>
            <div className="flex flex-row w-full justify-end items-center">
                <button 
                    onClick={onClick} 
                    className="
                        flex hover:bg-zinc-800 p-2 rounded-full
                        text-white 
                    ">
                        <IconDoorExit size={24} />
                </button>
            </div>
        </div>
    );
}

export default User;