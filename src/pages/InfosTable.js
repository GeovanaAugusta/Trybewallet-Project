import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeAnExpense } from '../actions';
import Table from './Table';
import { Button, Button2 } from '../CSS/infosTable';

export class InfosTable extends Component {
  render() {
    const { expenses, getRemoveAnExpense, handleClickEdit, editButtonEdit } = this.props;
    // console.log(expenses);
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
                  <Button2
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleClickEdit(expense.id,
                      expense.exchangeRates) }
                  >
                    Editado
                  </Button2>
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

              {/* <td>
              <button
                type="button"
                data-testid="edit-btn"
                onClick={ () => getEditAnExpense(expense.id) }
              >
                Editar
              </button>
            </td> */}

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

// REQUISITO 8
// Douglas me relembrou o uso da outra forma de acesso de objetos que é a Notação de colchete, foi uma aula!
// Aí pesquisei mais nesses links:
// https://imasters.com.br/desenvolvimento/o-poder-dos-colchetes-no-javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors

// REQUISITO 9
// 3, como cada item tem uma key única que é o id, então é a partir dele que faço o filter para remover do estado, outro ponto do filter é que como o state é imutável, só posso usar métodos de clonagem (como o filter) e de mutação nem pensar! https://stackoverflow.com/questions/60602801/how-to-update-the-global-state-using-redux-and-remove-an-item-from-the-global-st
// 13 https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state

// REQUISITO 10
// Entendo que preciso de duas ações, uma de clicar para editar e outra de atribuir as alterações pra finalizar a edição
