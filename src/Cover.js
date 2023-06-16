import React from 'react';
import styled from 'styled-components';
import Background from './Background';

const Img = styled.img`
  width: 500px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0;
  color: #007acc;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-weight: bold;
`;

const Name = styled.h3`
  margin-top: 4rem;
  font-weight: normal;
  color: #3d93cc;
`;

const Cover = ({ title, subtitle }) => {
  return (
    <Background background="#ffffff" color="#000000">
      <Img src="./img/internship.png" />
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Name>Sibelius Seraphini</Name>
    </Background>
  );
};

export default Cover;
