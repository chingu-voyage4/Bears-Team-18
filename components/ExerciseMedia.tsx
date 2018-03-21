import React from "react";

interface IProps {
  link: string;
}

const ExerciseMedia: React.SFC<IProps> = ({ link }) => (
  <div className="col-md-6">
    <img className="img-fluid" src={link} alt="img is broken" />
  </div>
);

export default ExerciseMedia;
