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
