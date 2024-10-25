import { useState } from "react";

export default function useStateValidado<T = any>(valorInicial: T, validador: (valor: T) => boolean) {
    const [valor, setValor] = useState(valorInicial)
    const [validado, setValidado] = useState(false)

    function setValorValidado(novoValor: T) {
        setValor(novoValor)
        setValidado(validador(novoValor))
    }

    return [valor, setValorValidado, validado] as [T, (novoValor: T) => void, boolean]
}