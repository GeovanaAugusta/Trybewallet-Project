import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // console.log(expenses);

    // Preciso do value acumulado, a partir disso preciso multiplicar esse value em função da cotação e sempre somando com a multiplicação dos próximos - reduce
    // Percebi que o code da exchangeRates é = ao currency

    const getTotalExpenses = expenses.map((element) => (
      { value: element.value,
        currency: element.currency,
        exchangeRates: element.exchangeRates }
    ))
      .reduce((accumulator, currentValue) => {
        const currencies = Object.values(currentValue.exchangeRates)
        // console.log(currencies);
          .find((getCurrency) => getCurrency.code === currentValue.currency);
        // console.log(currencies);
        accumulator += (currentValue.value * currencies.ask);
        return accumulator;
      }, 0).toFixed(2);
    // console.log(getTotalExpenses);

    return (
      <div>
        <span data-testid="email-field">
          Email:
          {' '}
          {email}
        </span>
        <span data-testid="total-field">
          {getTotalExpenses}
        </span>
        <span data-testid="header-currency-field"> BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

// SOURCES

// span pra ficar já inicialmente em linha https://guilhermemuller.com.br/ead/html-css-na-pratica/elementos-bloco-em-linha

// Requisito 6
// Objeto em array https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
// Relembrando https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
