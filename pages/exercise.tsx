import gql from "graphql-tag";
import { graphql } from "react-apollo";
import withData from "../lib/withData";

interface IExerciseProps {
  data: {
    loading: boolean;
    error: boolean;
    exercise: {
      id: number;
      name: string;
      description: string;
    };
  };
}

const Exercise: React.SFC<IExerciseProps> = ({
  data: { loading, error, exercise },
}) => {
  if (error) return <p>An error occured</p>;
  if (exercise)
    return (
      <div>
        <h1>
          #{exercise.id} - {exercise.name}
        </h1>
        <p>{exercise.description}</p>
      </div>
    );

  return <p>Loading</p>;
};

const exerciseQuery = gql`
  query exercise($id: Int!) {
    exercise(id: $id) {
      id
      name
      description
    }
  }
`;

const exerciseQueryVars = {
  id: 100,
};

const ExerciseData = graphql<{}, {}, IExerciseProps>(exerciseQuery, {
  options: {
    variables: exerciseQueryVars,
  },
})(Exercise);

export default withData(() => <ExerciseData />);
