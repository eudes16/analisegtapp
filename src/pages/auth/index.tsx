'use client'
import SessionStorage from "@/commons/SessionStorage";
import Flex from "@/components/layouts/Flex";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import axios, { AxiosRequestConfig } from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";


export default function Auth() {
    const searchParams = useSearchParams()
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''

    const code = searchParams.get('code')

    if (code) {
        SessionStorage.setItem('code', code, true)
    }

    const claim2 = useCallback(async (): Promise<void> => {
        try {
            
            const client = new ApolloClient({
                uri: 'http://localhost:4000/',
                cache: new InMemoryCache()
            })
            
            const { data } = await client.query({
                query: gql`
                    query Claim($code: String!) {
                        claim(code: $code)  {
                            data
                            message
                        }
                    }`
                ,
                variables: {
                    code: code
                }
            })
            
            SessionStorage.setItem('token', data.claim.data.jwt)
            SessionStorage.setItem('user', data.claim.data.user, true)

        } catch (error) {
            console.log(error)
        }

    }, [code])

    useEffect(() => {
        if (code) {
            claim2().then(() => {
                router.push('/')
            })
        }
    }, [code, claim2, router])
    
    return (
        <Flex center>
            <h1>Autenticando...</h1>
        </Flex>
    );
}
