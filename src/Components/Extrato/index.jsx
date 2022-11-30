import React from 'react';
import { Box, Button } from '../UI/index';
import { extratoLista } from '../../info';

const Extrato = () => {
  return (
    <Box>
      {
        extratoLista.updates.map(({id, type, from, value, date}) => {
          return (
            <div key={id}>
              <div>{type}</div>
              <div>{from}</div>
            </div>
          )
        })
      }
      <Button>Ver mais</Button>
    </Box>
  )
}

export default Extrato;