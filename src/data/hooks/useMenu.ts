import { useContext } from "react";
import ContextoMenu from "../contexts/MenuProvider";

export default function useMenu() {
    return useContext(ContextoMenu)
}