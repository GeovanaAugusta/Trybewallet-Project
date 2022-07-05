import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeAnExpense } from '../actions';
import Table from './Table';
import { Button, Button2, Button3 } from '../CSS/infosTable';

class InfosTable extends Component {
  render() {
    const { expenses, getRemoveAnExpense, handleClickEdit, editButtonEdit } = this.props;
    return (
      <table>
        <Table />
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>

              <td>{expense.description}</td>

              <td>{expense.tag}</td>

              <td>{expense.method}</td>

              <td>{Number(expense.value).toFixed(2)}</td>

              <td>{expense.exchangeRates[expense.currency].name.split('/', 1)}</td>

              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>

              <td>
                {Number(expense.value * expense.exchangeRates[expense.currency]
                  .ask).toFixed(2)}
              </td>

              <td>Real</td>
              <td>
                { editButtonEdit ? (
                  <Button3
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleClickEdit(expense.id,
                      expense.exchangeRates) }
                  >
                    Editado
                  </Button3>
                ) : (
                  <Button2
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleClickEdit(expense.id,
                      expense.exchangeRates) }
                  >
                    Editar
                  </Button2>
                )}
                <Button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => getRemoveAnExpense(expense.id) }
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

InfosTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  getRemoveAnExpense: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  editButtonEdit: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getRemoveAnExpense: (expense) => dispatch(removeAnExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfosTable);
