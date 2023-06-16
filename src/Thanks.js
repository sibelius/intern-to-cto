import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import QRCode from 'qrcode.react';
import { Flex } from 'rebass';

const Title = styled.h1`
  color: #fff;
`;

const Subtitle = styled.h1`
  color: #fff;
`;

const Img = styled.img`
  width: 400px;
  border: 6px solid #fff;
  border-radius: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

export const QRCodeWrapper = styled(Flex)`
  display: ${(props) => (props.qrCodeShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 2px;
  border: ${(props) => (props.qrCodeShow ? '5px solid' : 'none')};
  border-color: #40787a;
  border-radius: 10px;
  width: 300px;

  & > svg {
    display: ${(props) => (props.qrCodeShow ? 'block' : 'none')};
    height: auto; /* reset height */
    width: 100%; /* reset width */
  }
`;

const Thanks = () => {
  const website = 'https://woovi.com/jobs';
  const qrCodeShow = true;

  return (
    <Background background="#03d69d">
      <Title>Thanks</Title>
      <Subtitle>We are hiring!</Subtitle>
      <QRCodeWrapper qrCodeShow={qrCodeShow}>
        <QRCode renderAs='svg' value={website} includeMargin />
      </QRCodeWrapper>
      <Link href="https://woovi.com/jobs" target="_blank">
        <h2>woovi.com/jobs</h2>
      </Link>
    </Background>
  );
};

export default Thanks;
