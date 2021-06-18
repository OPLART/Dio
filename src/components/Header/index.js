import React from 'react';
import { Image, Text } from 'react-native';

import Logo from '../../assets/logo.png';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Image source={Logo} resizeMode="contain" style={{width: 100, height: 100 }} />
    </Container>
  )
}

export default Header;