import { makeExecutableSchema } from "graphql-tools";
import * as fetch from "isomorphic-unfetch";

// Types
const typeDefs = `
  type Query {
    categories: [Category]
    exercises(category: Int!) : [Exercise]
    exercise(id: Int!) : Exercise
    exerciseimage(id: Int!) : [ExerciseImage]
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

  type ExerciseImage {
    id: Int!
    license_author: String
    status: String
    image: String
    is_main: Boolean
    license: Int
    exercise: Int!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    categories: async () => {
      const r = await fetch("https://wger.de/api/v2/exercisecategory");
      const data = await r.json();

      return data.results;
    },
    exercise: async (_, { id }) => {
      const r = await fetch(`https://wger.de/api/v2/exercise/${id}`);
      const data = await r.json();

      return data;
    },
    exerciseimage: async (_, { id }) => {
      const r = await fetch(
        `https://wger.de/api/v2/exerciseimage?exercise=${id}`,
      );
      const data = await r.json();

      return data.results;
    },
    exercises: async (_, { category }) => {
      const r = await fetch(
        `https://wger.de/api/v2/exercise/?category=${category}&language=2&equipment=7`,
      );
      const data = await r.json();

      return data.results;
    },
  },
};

// Export schema
module.exports = makeExecutableSchema({
  resolvers,
  typeDefs,
});
