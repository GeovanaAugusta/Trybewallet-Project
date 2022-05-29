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
  case 'REMOVE_AN_EXPENSE':
    return { ...state,
      expenses: state.expenses.filter((allExpense) => allExpense.id !== action.payload) };
  default:
    return state;
  }
};

export default walletReducer;

// REQUISITO 9
// 3, como cada item tem uma key única que é o id, então é a partir dele que faço o filter para remover do estado, outro ponto do filter é que como o state é imutável, só posso usar métodos de clonagem (como o filter) e de mutação nem pensar! https://stackoverflow.com/questions/60602801/how-to-update-the-global-state-using-redux-and-remove-an-item-from-the-global-st
// 13 https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state
