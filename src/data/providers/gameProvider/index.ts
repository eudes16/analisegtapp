import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { IGameQuery } from "@/data/providers/gameProvider/IGame.types";

export class GameProvider {
    constructor(private gqlClient: ApolloClient<any>) { }

    async list(query: IGameQuery, token: string = '') {
        const res = this.gqlClient.query({
            query: gql`
                query GetGames($pagination: inputPagination, $filter: inputGameFilter, $orderBy: [inputOrderByGame!], $fields: [GameFieldsEnum!]) {
                    getGames(pagination: $pagination, filter: $filter, orderBy: $orderBy, fields: $fields) {
                        data
                        page {
                            currentPage
                            nextPage
                            previousPage
                            totalPages
                            totalRecords
                        }
                    }
                }`,
            variables: {
                ...query
            }

        })
        return res;
    }

}
const gameProvider = new GameProvider(new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
}))

export default gameProvider;