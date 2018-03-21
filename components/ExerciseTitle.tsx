import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
}

const Row = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ExerciseTitle: React.SFC<IProps> = ({ name }) => (
  <Row className="row">
    <div className="col-12">
      <h1>{name}</h1>
    </div>
  </Row>
);

export default ExerciseTitle;
