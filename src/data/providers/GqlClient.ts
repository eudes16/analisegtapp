import { ApolloClient, InMemoryCache } from "@apollo/client";

export const authenticated = (): ApolloClient<any> => {
    const token = localStorage.getItem("token");
    const uri = process.env.NEXT_PUBLIC_API_URL || ''
    return new ApolloClient({
        uri: uri,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const unauthenticated = (): ApolloClient<any> => {
    const uri = process.env.NEXT_PUBLIC_API_URL || ''
    return new ApolloClient({
        uri: uri,
        cache: new InMemoryCache(),
    });
}