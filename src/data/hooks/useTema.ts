import { useContext } from "react";
import ContextoTema from "../contexts/TemaProvider";

export default function useTema() {
    return useContext(ContextoTema)
}