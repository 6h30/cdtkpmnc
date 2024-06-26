import React, { Component } from 'react';

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';

import uberx from '@/assets/glc-300.png';

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>32.000 VND</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}