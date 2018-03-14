import React from "react";
import styled from "styled-components";

import Contributor from "../components/Contributor";

const RootContainer = styled.div`
  padding: 30px;
`;

const ContributorList = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface IProps {
  contributors: [{ username: string; githubUrl: string; avatar: string }];
}

export default class extends React.Component<IProps> {
  public static async getInitialProps() {
    const contributors = [
      {
        avatar: "https://avatars2.githubusercontent.com/u/7694752?s=460&v=4",
        githubUrl: "https://github.com/Jarrku",
        username: "Jarrku",
      },
      {
        avatar: "https://avatars3.githubusercontent.com/u/17878488?s=460&v=4",
        githubUrl: "https://github.com/BenGitter",
        username: "BenGitter",
      },
      {
        avatar: "https://avatars0.githubusercontent.com/u/5286398?s=460&v=4",
        githubUrl: "https://github.com/LydiaVuj",
        username: "LydiaVuj",
      },
    ];
    return { contributors };
  }

  public render() {
    const { contributors } = this.props;

    return (
      <RootContainer>
        <h2>About</h2>
        <p>
          This app will give you an exercise based on the muscle group you
          choose.<br />
          It's made by Bears-Tean-18 as a learning project.
        </p>
        <h3>Contributors:</h3>
        <ContributorList>
          {contributors.map(c => <Contributor key={c.username} {...c} />)}
        </ContributorList>
      </RootContainer>
    );
  }
}
