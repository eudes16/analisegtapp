import { useContext } from "react";
import ContextoAuth from "../contexts/AuthProvider";

export default function useAuth() {
    return useContext(ContextoAuth)
}