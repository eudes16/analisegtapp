export interface Page {
    currentPage: number 
    nextPage: number | null
    previousPage: number | null
    totalPages: number
    totalRecords: number
}