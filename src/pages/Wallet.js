import React from 'react';
import Header from './Header';
import Forms from './Forms';
import Table from './Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Table />
      </div>
    );
  }
}

export default Wallet;
