import gql from "graphql-tag";
import { graphql } from "react-apollo";
import withData from "../lib/withData";

import ExerciseInfo from "../components/ExerciseInfo";
import ExerciseMedia from "../components/ExerciseMedia";
import ExerciseTitle from "../components/ExerciseTitle";

interface IExerciseProps {
  data: {
    loading: boolean;
    error: boolean;
    exercise: {
      id: number;
      name: string;
      description: string;
      image: Array<{
        id: number;
        image: string;
      }>;
    };
  };
}

const Exercise: React.SFC<IExerciseProps> = ({
  data: { loading, error, exercise },
}) => {
  if (error) return <p>An error occured</p>;
  if (exercise) {
    return exercise.image ? (
      <div className="container">
        <ExerciseTitle name={exercise.name} />
        <div className="row">
          <ExerciseInfo info={exercise.description} />
          <ExerciseMedia link={exercise.image[0].image} />
        </div>
      </div>
    ) : (
      <div className="container">
        <ExerciseTitle name={exercise.name} />
        <div className="row">
          <ExerciseInfo info={exercise.description} />
        </div>
      </div>
    );
  }

  return <p>Loading</p>;
};

const exerciseQuery = gql`
  query exercise($id: Int!) {
    exercise(id: $id) {
      id
      name
      description
      image {
        id
        image
      }
    }
  }
`;

const exerciseQueryVars = {
  id: 100,
};

export default withData(
  graphql<{}, {}, IExerciseProps>(exerciseQuery, {
    options: {
      variables: exerciseQueryVars,
    },
  })(Exercise),
);
