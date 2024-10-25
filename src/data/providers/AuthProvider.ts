import { apiAuth, IDataRequest } from "./Api"

export default class AuthProvider {

    static async getXboxAuthUrl() {
        const xboxAppKey = process.env['NEXT_PUBLIC_XBOX_API_KEY']
        const xboxAuthUrl = process.env['NEXT_PUBLIC_XBOX_API_AUTH_URL']
        return `${xboxAuthUrl}auth/${xboxAppKey}`
    }

    static async claim(code: string,) {
        try {

            const data = {
                code, 
                "app_key": process.env.NEXT_PUBLIC_XBOX_API_KEY
            }

            const request: IDataRequest = {
                url: 'claim/',
                data
            }
            const response = await apiAuth.post(request)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }

}