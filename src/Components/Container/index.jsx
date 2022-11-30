import React from "react";
import styled from 'styled-components';

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const ContainerWrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá, Fulano!</Titulo>
      <Content>
        <Conta />
        <Extrato />
      </Content>
    </ContainerWrapper>
  );
};

export default Container;
