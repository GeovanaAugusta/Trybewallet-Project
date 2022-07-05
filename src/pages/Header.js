import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Div } from '../CSS/header';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const getTotalExpenses = expenses.map((expense) => (
      { value: expense.value,
        currency: expense.currency,
        exchangeRates: expense.exchangeRates }
    ))
      .reduce((accumulator, currentValue) => {
        const currencies = Object.values(currentValue.exchangeRates)
          .find((getCurrency) => getCurrency.code === currentValue.currency);
        accumulator += (currentValue.value * currencies.ask);
        return accumulator;
      }, 0).toFixed(2);

    return (
      <Div className="header">
        <div>
          <h2 className="trybewallet2">TRYBEWALLET</h2>
        </div>
        <div className="space">
          <span className="span email" data-testid="email-field">
            Email:
            {' '}
            {email}
          </span>
          <span
            data-testid="total-field"
            className="brl span"
          >
            {getTotalExpenses}
          </span>
          <span
            className="span"
            data-testid="header-currency-field"
          >
            {' '}
            BRL

          </span>
        </div>
      </Div>
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
