export interface IPagination {
    limit: number
    page: number
}

export type TOrderBy<FIELD> = {
    field: FIELD
    direction: 'ASC' | 'DESC'
} 

export type TFields<FIELDS> = Array<keyof FIELDS>

export type TStringFilter = {
    _contains?: string
    _ends_with?: string
    _eq?: string
    _gt?: string
    _gte?: string
    _in?: Array<string>
    _lt?: string
    _lte?: string
    _not?: string
    _not_contains?: string
    _not_ends_with?: string
    _not_in?: Array<string>
    _not_starts_with?: string
    _starts_with?: string
}

export type TNumberFilter = {
    _contains?: number
    _ends_with?: number
    _eq?: number
    _gt?: number
    _gte?: number
    _in?: Array<number>
    _lt?: number
    _lte?: number
    _not?: number
    _not_contains?: number
    _not_ends_with?: number
    _not_in?: Array<number>
    _not_starts_with?: number
    _starts_with?: number
}

export type TDateFilter = {
    _eq?: string
    _gt?: string
    _gte?: string
    _in?: Array<string>
    _lt?: string
    _lte?: string
    _not?: string
    _not_in?: Array<string>
}

export type TArrayStringFilter = {
    _eq?: Array<string>
    _has?: string
    _has_every?: Array<string>
    _has_some?: Array<string>
    _is_empty?: boolean
    _is_set?: boolean
}

export type TArrayNumberFilter = {
    _eq?: Array<number>
    _has?: number
    _has_every?: Array<number>
    _has_some?: Array<number>
    _is_empty?: boolean
    _is_set?: boolean
}

export type TBooleanFilter = {
    _is?: boolean
    _not_is?: boolean
}

