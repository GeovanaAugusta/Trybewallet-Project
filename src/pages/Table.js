import React, { Component } from 'react';

export class Table extends Component {
  render() {
    return (

      <thead>
        <table>
          <tr>
            <th>Descrição </th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </table>
      </thead>

    );
  }
}

export default Table;
