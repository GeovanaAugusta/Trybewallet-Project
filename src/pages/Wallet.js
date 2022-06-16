import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Forms from './Forms';
import Footer from './Footer';

class Wallet extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        <br />
        <Forms expenses={ expenses } />
        <br />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Wallet);
