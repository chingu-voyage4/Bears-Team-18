import React from "react";

interface IProps {
  info: string;
}

const ExerciseInfo: React.SFC<IProps> = ({ info }) => (
  <div className="col-md-6">
    <p>{info}</p>
  </div>
);

export default ExerciseInfo;
