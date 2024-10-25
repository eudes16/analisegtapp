
const CryptoJS = require('crypto-js')

export default class Encryptor {
    static encrypt(data: string) {
        const cypher = process.env.APP_KEY || 'default'
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), cypher).toString()
        return encrypted
    }

    static decrypt(data: string) {
        const cypher = process.env.APP_KEY || 'default'
        const bytes = CryptoJS.AES.decrypt(data, cypher)
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
        return decryptedData
    }
}