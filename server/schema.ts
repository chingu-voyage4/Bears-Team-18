import { makeExecutableSchema } from "graphql-tools";
import * as fetch from "isomorphic-unfetch";

// Helper method to fetch JSON
const getJSON = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

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
    image: [ExerciseImage]
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
      const { results } = await getJSON(
        "https://wger.de/api/v2/exercisecategory",
      );

      return results;
    },
    exercise: async (_, { id }) => {
      const info = getJSON(`https://wger.de/api/v2/exercise/${id}`);
      const image = getJSON(
        `https://wger.de/api/v2/exerciseimage?exercise=${id}`,
      );
      const [dataInfo, dataImage] = [await info, await image];

      return {
        ...dataInfo,
        image: dataImage.results,
      };
    },
    exercises: async (_, { category }) => {
      const { results } = await getJSON(
        `https://wger.de/api/v2/exercise/?category=${category}&language=2&equipment=7`,
      );

      return results;
    },
  },
};

// Export schema
module.exports = makeExecutableSchema({
  resolvers,
  typeDefs,
});
