// Coloque aqui suas actions
export const saveUserEmail = (email) => ({
  type: 'CHANGE_EMAIL',
  payload: email,
});

export const saveCurrencies = (currencies) => ({
  type: 'GET_CURRENCIES',
  payload: currencies,
});

export const fetchAPI = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    dispatch(saveCurrencies(Object.keys(result).filter((ccy) => ccy !== 'USDT')));
  } catch (error) {
    console.log(error);
  }
};

export const saveExpenses = (expenses) => ({
  type: 'GET_EXPENSES',
  payload: expenses,
});

export const fetchAPICot = (expenses) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const objectRequired = { ...expenses, exchangeRates: result };
    // console.log(objectRequired);
    dispatch(saveExpenses(objectRequired));
  } catch (error) {
    console.log(error);
  }
};

export const removeAnExpense = (expenseID) => ({
  type: 'REMOVE_AN_EXPENSE',
  payload: expenseID,
});

export const updatetAllExpenses = (finalExpenses) => ({
  type: 'EDIT_AN_EXPENSE',
  payload: finalExpenses,
});

// REQUISITO 4
// SOURCE
// Mentoria da excepcional Luá, com código presente aqui: https://github.com/luacomacento/booksapi-redux/blob/main/src/redux/actions/index.js

// REQUISITO 9
// 3, como cada item tem uma key única que é o id, então é a partir dele que faço o filter para remover do estado, outro ponto do filter é que como o state é imutável, só posso usar métodos de clonagem (como o filter) e de mutação nem pensar! https://stackoverflow.com/questions/60602801/how-to-update-the-global-state-using-redux-and-remove-an-item-from-the-global-st
// 13 https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state
