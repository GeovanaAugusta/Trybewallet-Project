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

// REQUISITO 4
// SOURCE
// Mentoria da excepcional Luá, com código presente aqui: https://github.com/luacomacento/booksapi-redux/blob/main/src/redux/actions/index.js
