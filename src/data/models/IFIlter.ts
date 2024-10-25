import { Game } from "./IGame";
import { Achievement, GamerTag } from "./IGamerTag";

type TFields<T> = Array<keyof T>
type TField<T> = keyof T

// export interface IFilter<T> {
//     fields: TFields<T>;
// }

type Primitive = string | Function | number | boolean | Symbol | undefined | null 


type ISelectFields<T> = {[K in keyof T]?: true} 
type IOrderByFields<T> = {[K in keyof T]?: "asc" | "desc"} 
    

interface ISelectGamerTag extends ISelectFields<GamerTag> {
    includes?: {
        achievements?: ISelectFields<Achievement> & {
            includes?: {
                game?: ISelectFields<Game> & {
                    OrderBy?: Array<IOrderByFields<Game>>
                }
            }
            orderBy?: Array<IOrderByFields<Achievement>>
        }
    }
    orderBy?: Array<IOrderByFields<GamerTag>>
}



export type IQuery<T> = T


const queryGamerTag: IQuery<ISelectGamerTag> = {
    id: true,
    name: true,
    imageUrl: true,
    orderBy: [
        {
            name: "asc"
        }
    ],
    includes: {
        achievements: {
            id: true,
            progressPercentage: true,
            orderBy: [
                {
                    progressPercentage: "desc"
                }
            ],
            includes: {
                game: {
                    id: true,
                    name: true,
                    OrderBy: [
                        {
                            name: "asc"
                        }
                    ]
                }
            }
        },
    }
}
