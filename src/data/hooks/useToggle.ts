import { useState } from "react";

export default function useToggle(valor?: boolean) {
    const [ativo, setAtivo] = useState(valor ?? false)

    function toggleAtivo() {
        setAtivo(!ativo)
    }

    return [ativo, toggleAtivo] as [boolean, () => void]
}