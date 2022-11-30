import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconThemed } from './UI';

export default (type) => {
  const Images = {
    Restaurante: <IconThemed src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconThemed src={utilidades} alt="Utilidades" />,
    Saude: <IconThemed src={saude} alt="Saude" />,
    Transporte: <IconThemed src={transporte} alt="Transporte" />,
    Outros: <IconThemed src={outros} alt="Outros" />,
    default: <IconThemed src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
};
