// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE_USER = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case 'CHANGE_EMAIL':
    return { ...state, email: action.payload };
  default:
    return state;
  }
};
export default user;
