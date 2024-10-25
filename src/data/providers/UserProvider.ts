import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export class UserProvider {
    constructor(private gqlClient: ApolloClient<any>) { }
    async list(page: number = 1, token: string = '') {
        const headers: any = {}
        
        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        const res = this.gqlClient.query({
            query: gql`
                query GetUsers($fields: [UserFieldsEnum!], $includes: [UserIncludeFieldsEnum!]) {
                    getUsers(fields: $fields, includes: $includes) {
                        data
                        message
                        page {
                        currentPage
                        nextPage
                        previousPage
                        totalPages
                        totalRecords
                        }
                    }
                }`
            ,
            context: {
                headers,
            },
            variables: {
                "fields": [
                  "name",
                  "id",
                  "gamerTag",
                  "imageUrl",
                  "gamerScore"
                ],
                "includes":  ["achievements_game"]
              }

        })
        return res;
    }

}
const userProvider = new UserProvider(new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
}))

export default userProvider;