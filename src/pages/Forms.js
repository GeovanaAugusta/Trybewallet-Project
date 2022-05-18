import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

export class Forms extends Component {
  async componentDidMount() {
    const { getFetchAPI } = this.props;
    await getFetchAPI();
    // console.log(getFetchAPI); // OK
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies); // Certo, as 15 moedas

    const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currencies">
          Moeda:
          <select id="currencies">
            { currencies.map((currency, index) => (
              <option key={ index }>
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            data-testid="method-input"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-credito">Cartão de crédito</option>
            <option value="cartao-debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag
          <select
            id="category"
            data-testid="tag-input"
          >
            { tagArray.map((tag, index) => (
              <option key={ index }>
                {tag}
              </option>
            ))}
          </select>
        </label>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  getFetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

// REQUISITO 4
// SOURCE
// Para enviar as informações para a store precisava usar o mapDispatchToProps, só fazendo a action o teste não ia, como Forms não tem um botão ou algo pra vincular a chamada da API, o didMount veio em mente e na aula do grande Jensen (15.) já havia sido mencionado, procurando na minutagem 47:13 fica claro ser o melhor lugar para receber uma API nesse contexto
// redux-thunk 15.4 peguei essa estrutura de base
// const mapDispatchToProps = (dispatch) => ({
// getImage: () => dispatch(fetchAPI()),
// });
