import React, { useState } from "react";
import styled from 'styled-components';

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icon, IconThemed, Box, Button, Total, Detail } from '../UI/index';

const IconMargin = styled(Icon)`
  margin: ${(props) => props.margin };
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconThemed src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Total>
            <Detail>R$</Detail> 0,00{" "}
          </Total>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin margin="2px 0 0 0"
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
