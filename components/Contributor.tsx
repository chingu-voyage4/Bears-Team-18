import React from "react";
import styled from "styled-components";

interface IProps {
  username: string;
  githubUrl: string;
  avatar: string;
}

const ProfileImage = styled.img`
  max-height: 200px;
  max-width: 200px;
`;

const Username = styled.span`
  text-align: center;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const Contributor = ({ username, githubUrl, avatar }: IProps) => (
  <Container href={githubUrl}>
    <Username>{username}</Username>
    <br />
    <ProfileImage src={avatar} />
  </Container>
);

export default Contributor;
