// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.payload };
  case 'GET_EXPENSES':
    return { ...state,
      expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
