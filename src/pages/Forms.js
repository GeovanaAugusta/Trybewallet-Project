import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchAPICot } from '../actions';

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
    const objectRequired = {
      ...this.state,
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

  render() {
    const { currencies } = this.props;
    // console.log(currencies); // Certo, as 15 moedas

    const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    const { value, description, currency, method, tag } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
            name="value"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            data-testid="description-input"
            onChange={ this.handleChange }
            value={ description }
            name="description"
          />
        </label>

        <label htmlFor="currencies">
          Moeda:
          <select
            id="currencies"
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
          >
            { currencies.map((currencyy, index) => (
              <option key={ index }>
                {currencyy}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag
          <select
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
          </select>
        </label>

        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: () => dispatch(fetchAPI()),
  getFetchAPICot: (objectRequired) => dispatch(fetchAPICot(objectRequired)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  getFetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFetchAPICot: PropTypes.func.isRequired,
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
