import { makeExecutableSchema } from "graphql-tools";
import * as fetch from "isomorphic-unfetch";

// Types
const typeDefs = `
  type Query {
    categories: [Category]
    exercises(category: Int!) : [Exercise]
    exercise(id: Int!) : Exercise
  }

  type Category {
    id: Int!
    name: String!
  }

  type Exercise {
    id: Int!
    license_author: String
    status: String
    description: String
    name: String
    name_original: String
    creation_data: String
    uuid: String
    license: Int
    category: Int
    language: Int
    muscles: [Int]
    muscles_secondary: [Int]
    equipment: [Int]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    categories: () => {
      return fetch("https://wger.de/api/v2/exercisecategory")
        .then(r => r.json())
        .then(data => data.results);
    },
    exercise: (_, { id }) => {
      return fetch(`https://wger.de/api/v2/exercise/${id}`).then(r => r.json());
    },
    exercises: (_, { category }) => {
      return fetch(
        `https://wger.de/api/v2/exercise/?category=${category}&language=2&equipment=7`,
      )
        .then(r => r.json())
        .then(data => data.results);
    },
  },
};

// Export schema
module.exports = makeExecutableSchema({
  resolvers,
  typeDefs,
});
