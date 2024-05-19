import React from 'react';

const Footer = () => {
  const redirecionarTela = () => {
    window.location.href = 'vagas_disponiveis.html';
  };

  return (
    <footer>
      <button id="redirecionar" onClick={redirecionarTela}>Ver vagas</button>
    </footer>
  );
};

export default Footer;
