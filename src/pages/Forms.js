import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchAPICot, updatetAllExpenses } from '../actions';
import { Input, Div, Button, Select } from '../CSS/forms';
import InfosTable from './InfosTable';

const food = 'Alimentação';

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: food,
      exchangeRates: {},
      exchangeRatesAfterEdit: {},
      editButton: false,
      editIdExpense: 0,
      editButtonEdit: false,
    };
  }

  async componentDidMount() {
    const { getFetchAPI } = this.props;
    await getFetchAPI();
    // console.log(getFetchAPI); // OK
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { getFetchAPICot } = this.props;
    const { id, value, description, currency,
      method, tag, exchangeRates } = this.state;
    const objectRequired = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    getFetchAPICot(objectRequired);

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: food,
    }));
  }

  handleClickEdit = (editIdExpense, exchangeRatesAfterEdit) => {
    console.log('editIdExpense', editIdExpense);
    const { editButton } = this.state;
    if (editButton === false) {
      this.setState({
        editButton: true,
        editIdExpense,
        exchangeRatesAfterEdit,
        editButtonEdit: true,
      });
    } else {
      this.setState({
        editButton: false,
        editIdExpense,
        exchangeRatesAfterEdit,
      });
    }
  }

  handleClickUpdateForms = () => {
    console.log('works');
    const { expenses, updateExpense } = this.props;
    console.log('expenses', expenses);
    const { value, description, currency,
      method, tag, exchangeRatesAfterEdit, editIdExpense } = this.state;
    const objectRequired = {
      id: editIdExpense,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: exchangeRatesAfterEdit,
    };
    const finalObject = expenses.map((expense) => {
      if (expense.id === editIdExpense) {
        return objectRequired;
      }
      return expense;
    });
    updateExpense(finalObject);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      editButton: false,
      editButtonEdit: false,
    });
  }

  render() {
    const { currencies } = this.props;
    const { editButton } = this.state;

    const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value, description, currency, method, tag, editButtonEdit } = this.state;

    return (
      <Div>
        <form className="forms-space">
          Valor:
          <Input
            type="number"
            id="value"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
            name="value"
          />

          Descrição:
          <Input
            type="text"
            id="description"
            data-testid="description-input"
            onChange={ this.handleChange }
            value={ description }
            name="description"
          />

          <label htmlFor="currencies">
            Moeda:
            <Select
              id="currencies"
              data-testid="currency-input"
              onChange={ this.handleChange }
              value={ currency }
              name="currency"
            >
              { currencies.map((currencyy, index) => (
                <option key={ index }>
                  {currencyy}
                </option>
              ))}
            </Select>
          </label>

          {/* <label htmlFor="method"> */}
          Método de pagamento
          <Select
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </Select>
          {/* </label> */}

          <label htmlFor="category">
            Tag
            <Select
              id="category"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tag }
              name="tag"
            >
              { tagArray.map((tags, index) => (
                <option key={ index }>
                  {tags}
                </option>
              ))}
            </Select>
          </label>

          { editButton ? (
            <Button
              type="button"
              onClick={ this.handleClickUpdateForms }
            >
              Editar despesa
            </Button>
          ) : (
            <Button
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar despesa
            </Button>
          )}
        </form>
        <InfosTable
          handleClickEdit={ this.handleClickEdit }
          editButtonEdit={ editButtonEdit }
        />
      </Div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: () => dispatch(fetchAPI()),
  getFetchAPICot: (objectRequired) => dispatch(fetchAPICot(objectRequired)),
  updateExpense: (finalExpenses) => dispatch(updatetAllExpenses(finalExpenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  getFetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFetchAPICot: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

// SOURCES
// REQUISITO 4
// Para enviar as informações para a store precisava usar o mapDispatchToProps, só fazendo a action o teste não ia, como Forms não tem um botão ou algo pra vincular a chamada da API, o didMount veio em mente e na aula do grande Jensen (15.) já havia sido mencionado, procurando na minutagem 47:13 fica claro ser o melhor lugar para receber uma API nesse contexto
// redux-thunk 15.4 peguei essa estrutura de base
// const mapDispatchToProps = (dispatch) => ({
// getImage: () => dispatch(fetchAPI()),
// });
// Requisito 6
// Relembrar é viver 43 https://stackoverflow.com/questions/42364838/incrementing-state-value-by-one-using-react
