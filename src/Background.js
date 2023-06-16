import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  maxwidth: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;

const Background = ({ background, color, children }) => {
  return (
    <Container background={background} color={color}>
      {children}
    </Container>
  );
};

export default Background;
