import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class InfosTable extends Component {
  render() {
    const { expenses } = this.props;
    // console.log(expenses);

    return (
      <table>
        {expenses.map((element) => (
          <thead key={ element.id }>

            <td>{element.description}</td>

            <td>{element.tag}</td>

            <td>{element.method}</td>

            <td>{Number(element.value).toFixed(2)}</td>

            <td>{element.exchangeRates[element.currency].name.split('/', 1)}</td>

            <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>

            <td>
              {Number(element.value * element.exchangeRates[element.currency]
                .ask).toFixed(2)}
            </td>

            <td>Real</td>

            <td>Editar/Excluir</td>
          </thead>
        ))}
      </table>
    );
  }
}

InfosTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(InfosTable);

// REQUISITO 8
// Douglas me relembrou o uso da outra forma de acesso de objetos que é a Notação de colchete, foi uma aula!
// Aí pesquisei mais nesses links:
// https://imasters.com.br/desenvolvimento/o-poder-dos-colchetes-no-javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors
