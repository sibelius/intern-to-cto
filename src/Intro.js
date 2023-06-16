import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { WooviLogo } from './img/WooviLogo';
import Background from './Background';

const Img = styled.img`
  width: 160px;
  border: 6px solid #fff;
  border-radius: 50%;
`;

const Name = styled.h1`
  color: #ffffff;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const Social = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Woovi = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  color: #ffffff;
`;

const Intro = () => {
  return (
    <Background background="#03d69d">
      <Img src="./img/avatar_blue.jpeg" />
      <Name>Sibelius Seraphini</Name>
      <Socials>
        <Social href="https://twitter.com/sseraphini" target="_blank">
          <FaTwitter size="22px" />
          <a>sseraphini</a>
        </Social>
        <Social href="https://github.com/sibelius" target="_blank">
          <FaGithub size="22px" />
          <a>sibelius</a>
        </Social>
      </Socials>
      <Woovi>
        <WooviLogo width="240px" fillColor="#fff" />
        <Title>CTO</Title>
      </Woovi>
    </Background>
  );
};

export default Intro;
