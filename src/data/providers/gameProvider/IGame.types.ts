import { IPagination, TArrayStringFilter, TDateFilter, TFields, TNumberFilter, TOrderBy, TStringFilter } from "../Base.types"

export interface IGame {
    id: number
    titleId: number
    name: string
    devices: Array<EnumDevices>
    displayImage: string
    createdAt: string
    updatedAt: string
}

export enum EnumDevices {
    Android = 'Android',
    Mobile = 'Mobile',
    PC = 'PC',
    Win32 = 'Win32',
    Xbox360 = 'Xbox360',
    XboxOne = 'XboxOne',
    XboxSeries = 'XboxSeries'
}

export interface IGameQuery {
    fields?: TFields<IGame>
    filter?: {
        id?: TNumberFilter
        titleId?: TNumberFilter
        name?: TStringFilter
        devices?: TArrayStringFilter
        displayName?: TStringFilter
        createdAt?: TDateFilter
        updatedAt?: TDateFilter
    }
    pagination?: IPagination
    orderBy?: Array<TOrderBy<IGame>>
}


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

