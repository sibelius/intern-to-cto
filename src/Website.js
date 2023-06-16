import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import QRCode from 'qrcode.react';
import { Flex } from 'rebass';
import Background from './Background';

const Img = styled.img`
  width: 400px;
  border: 6px solid #fff;
  border-radius: 20px;
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


const Website = () => {
  const website = 'https://sibelius.github.io/zettelkasten/';
  const qrCodeShow = true;

  return (
    <Background>
      <h1>Website</h1>
      <QRCodeWrapper qrCodeShow={qrCodeShow}>
      <QRCode renderAs='svg' value={website} includeMargin />
      </QRCodeWrapper>
      <Link href="https://sibelius.github.io/zettelkasten/" target="_blank">
        <h2>https://sibelius.github.io/zettelkasten/</h2>
      </Link>
    </Background>
  );
};

export default Website;
