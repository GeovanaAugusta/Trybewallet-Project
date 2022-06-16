import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserEmail } from '../actions/index';
import { Img, Input, Div, Button } from '../CSS/login';
import Wallet from '../images/wallet4.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  handleClick = () => {
    const { setUserEmail, history } = this.props;
    const { email } = this.state;

    history.push('/carteira');

    setUserEmail(email);
  }

  validate = () => {
    const { email, password } = this.state;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_PASSWORD_LENGTH = 6;

    const validation = [password.length >= MIN_PASSWORD_LENGTH && regex.test(email)];

    this.setState({
      isDisabled: !validation.every((element) => element === true),
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <Div>
        {/* <h1>Login</h1> */}
        <h1 className="trybewallet">TrybeWallet</h1>
        <form>
          <Img src={ Wallet } alt="wallet cartoon" />

          <Input
            data-testid="email-input"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <br />
          <Input
            data-testid="password-input"
            id="password"
            type="password"
            placeholder="Senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />

          <Button
            type="button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            Entrar
          </Button>
        </form>
      </Div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  setUserEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (email) => dispatch(saveUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

// REQUISITO 1
// SOURCE
// regex e validação: arquivo Checkout do meu projeto em grupo FrontEnd Online Store
// https://github.com/tryber/sd-020-a-project-frontend-online-store/commit/5b94b068e1fd3364a9f937aeb3c6d802f544af72
