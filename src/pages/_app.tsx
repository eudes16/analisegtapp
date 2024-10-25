import { TemaProvider } from "@/data/contexts/TemaProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { MenuProvider } from "@/data/contexts/MenuProvider";
import { AuthProvider } from "@/data/contexts/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
    // if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;
    

    return (<TemaProvider>
        <AuthProvider>
            <MenuProvider>
                <Component {...pageProps} />
            </MenuProvider>
        </AuthProvider>
    </TemaProvider>
    );
}
