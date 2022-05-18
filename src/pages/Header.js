import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <span data-testid="email-field">
          Email:
          {' '}
          {email}
        </span>
        <span data-testid="total-field"> Despesa total: R$ 0</span>
        <span data-testid="header-currency-field"> BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

// span pra ficar já inicialmente em linha https://guilhermemuller.com.br/ead/html-css-na-pratica/elementos-bloco-em-linha
