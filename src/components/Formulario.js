import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    placaVeiculo: '',
    nomeDoProprietario: '',
    numeroDoApartamento: '',
    blocoDoApartamento: '',
    modeloDoVeiculo: '',
    corDoVeiculo: '',
    numeroDaVagaDoEstacionamento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.values(formData).some(value => value === '');
    if (emptyFields) {
      alert('Por favor, preencha todas as informações!');
    } else {
      console.log(formData);
      alert('Cadastrado com sucesso!');
      setFormData({
        placaVeiculo: '',
        nomeDoProprietario: '',
        numeroDoApartamento: '',
        blocoDoApartamento: '',
        modeloDoVeiculo: '',
        corDoVeiculo: '',
        numeroDaVagaDoEstacionamento: ''
      });
    }
  };

  return (
    <main>
      <form id="formulario" onSubmit={handleSubmit}>
        <label htmlFor="placaVeiculo">Placa do veículo:</label><br />
        <input type="text" id="placaVeiculo" name="placaVeiculo" value={formData.placaVeiculo} onChange={handleChange} /><br />

        <label htmlFor="nomeDoProprietario">Nome do proprietário:</label><br />
        <input type="text" id="nomeDoProprietario" name="nomeDoProprietario" value={formData.nomeDoProprietario} onChange={handleChange} required /><br />

        <label htmlFor="numeroDoApartamento">Número do apartamento:</label><br />
        <input type="text" id="numeroDoApartamento" name="numeroDoApartamento" value={formData.numeroDoApartamento} onChange={handleChange} required /><br />

        <label htmlFor="blocoDoApartamento">Bloco do apartamento:</label><br />
        <input type="text" id="blocoDoApartamento" name="blocoDoApartamento" value={formData.blocoDoApartamento} onChange={handleChange} required /><br />

        <label htmlFor="modeloDoVeiculo">Modelo do veículo:</label><br />
        <input type="text" id="modeloDoVeiculo" name="modeloDoVeiculo" value={formData.modeloDoVeiculo} onChange={handleChange} /><br />

        <label htmlFor="corDoVeiculo">Cor do veículo:</label><br />
        <input type="text" id="corDoVeiculo" name="corDoVeiculo" value={formData.corDoVeiculo} onChange={handleChange} required /><br />

        <label htmlFor="numeroDaVagaDoEstacionamento">Número da vaga de estacionamento:</label><br />
        <input type="text" id="numeroDaVagaDoEstacionamento" name="numeroDaVagaDoEstacionamento" value={formData.numeroDaVagaDoEstacionamento} onChange={handleChange} required /><br />
        
        <div id="bordaBotao">
          <input type="submit" id="salvarReserva" value="Salvar reserva" />
        </div>
      </form>
    </main>
  );
};

export default Formulario;
