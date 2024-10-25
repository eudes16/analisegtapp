import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export interface IDataRequest<T = any> {
    url: string
    data?: T
    headers?: Record<string, string>
}

export interface IDataResponse<T = any> {
    data: T
    status: number
    message?: string
}

export interface IApiProvider {
    get<T = any, R = any>(data: IDataRequest<T>): Promise<IDataResponse<R>>
    post<T = any, R = any>(data: IDataRequest<T>): Promise<IDataResponse<R>>
    put<T = any, R = any>(data: IDataRequest<T>): Promise<IDataResponse<R>>
    delete<T = any, R = any>(data: IDataRequest<T>): Promise<IDataResponse<R>>
}

export class Api implements IApiProvider {

    private httpClient: AxiosInstance

    constructor(baseUrl: string) {
        this.httpClient = axios.create({
            baseURL: baseUrl
        })

        this.httpClient.interceptors.request.use(
            (config) => {
                config.headers['Accept'] = 'application/json'
                return config
            }, 
            (error) => {
                return Promise.reject(error)
            }
        )

        this.httpClient.interceptors.response.use(
            (response) => {
                return response
            }, 
            (error) => {
                return Promise.reject(error)
            }
        )

    }

    async get<T = any, R = any>(request: IDataRequest<T>): Promise<IDataResponse<R>> {
        try {

            const options: AxiosRequestConfig = {}

            if (request?.headers) {
                options.headers = request.headers
            }

            options.withCredentials = true

            const response = await this.httpClient.get<R>(request.url, options)
            
            return {
                data: response.data,
                status: response.status
            } as IDataResponse<R>

        } catch (error: any) {
            return {
                data: error.response.data,
                status: error.response.status,
                message: error.message
            }
        }
    }

    async post<T = any, R = any>(request: IDataRequest<T>): Promise<IDataResponse<R>> {
        try {

            const options: AxiosRequestConfig = {}

            if (request?.headers) {
                options.headers = request.headers
            }

            const response = await this.httpClient.post<R>(request.url, request.data, options)
            
            return {
                data: response.data,
                status: response.status
            } as IDataResponse<R>

        } catch (error: any) {
            return {
                data: error.response.data,
                status: error.response.status,
                message: error.message
            }
        }
    }

    async put<T = any, R = any>(request: IDataRequest<T>): Promise<IDataResponse<R>> {
        try {

            const options: AxiosRequestConfig = {}

            if (request?.headers) {
                options.headers = request.headers
            }

            const response = await this.httpClient.put<R>(request.url, request.data, options)
            
            return {
                data: response.data,
                status: response.status
            } as IDataResponse<R>

        } catch (error: any) {
            return {
                data: error.response.data,
                status: error.response.status,
                message: error.message
            }
        }
    }

    async delete<T = any, R = any>(request: IDataRequest<T>): Promise<IDataResponse<R>> {
        try {

            const options: AxiosRequestConfig = {}

            if (request?.headers) {
                options.headers = request.headers
            }

            const response = await this.httpClient.delete<R>(request.url, options)
            
            return {
                data: response.data,
                status: response.status
            } as IDataResponse<R>

        } catch (error: any) {
            return {
                data: error.response.data,
                status: error.response.status,
                message: error.message
            }
        }
    }
}

export const api = new Api(process.env.NEXT_PUBLIC_XBOX_API_URL!)

export const apiAuth = new Api(process.env.NEXT_PUBLIC_API_AUTH_URL!)