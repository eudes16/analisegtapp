import { GamerTag } from "../models/IGamerTag"

export type OrderOptions<T> = Array<{
    text: string
    value: keyof T
}>

export const orderOptionsGamerTag: OrderOptions<GamerTag> = [
    {
        text: "Nome",
        value: "name"
    },
    {
        text: "Game Score",
        value: "gamerScore"
    },
    {
        text: "Gamer Tag",
        value: "gamerTag"
    }
]

export const orderOptionsDirection =  [
    {
        text: "Crescente",
        value: "ASC"
    },
    {
        text: "Decrescente",
        value: "DESC"
    }
]