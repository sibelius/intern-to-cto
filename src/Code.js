import React from 'react';
import styled from 'styled-components';
import { CodeSurfer } from 'mdx-deck-code-surfer';

const Container = styled.div`
  font-size: ${(props) => props.fontSize}px;
  background-color: #101828;
  color: #ffffff;
`;

const Code = (props) => {
  return (
    <Container fontSize={props.fontSize || 26}>
      <CodeSurfer {...props} />
    </Container>
  );
};

export default Code;
