// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE_USER = {
  email: '',
};

const userReducer = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case 'CHANGE_EMAIL':
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;

// Usando a chave user aqui no estado inicial, duplicava após a leitura das informações da store pelo user.email (mapState...)
