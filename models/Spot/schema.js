import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Spot {
    id: ID!
    name: String
}

type Query {
    spot(id: ID!): Spot
    spots: [Spot]
}

input SpotInput {
    name: String!
}

type Mutation {
    createSpot(input: SpotInput) : Spot
    updateSpot(id: ID!, input: SpotInput) : Spot
    deleteSpot(id: ID!) : Spot
}`

export default makeExecutableSchema({
	typeDefs,
	resolvers
});
