import React from 'react';
import Header from './Header';
import Forms from './Forms';
import Table from './Table';
import InfosTable from './InfosTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Table />
        <InfosTable />
      </div>
    );
  }
}

export default Wallet;
