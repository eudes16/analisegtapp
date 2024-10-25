'use client'

import Encryptor from "./Encryptor"

export default class SessionStorage {

    static setItem(key: string, value: string, encrypt: boolean = false) {
        const _value = encrypt ? Encryptor.encrypt(value) : JSON.stringify(value)
        sessionStorage.setItem(key, _value)
    }

    static getItem(key: string, decrypt: boolean = false) {
        const value = sessionStorage.getItem(key) || ''

        if (decrypt && value) {
            return JSON?.parse(Encryptor.decrypt(value))
        }

        if (value) {
            return JSON?.parse(value)
        }
        return null
    }

    static removeItem(key: string) {
        sessionStorage.removeItem(key)
    }

    static clear() {
        sessionStorage.clear()
    }

}