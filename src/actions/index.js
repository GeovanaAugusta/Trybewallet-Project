// Coloque aqui suas actions
export const saveUserEmail = (email) => ({
  type: 'CHANGE_EMAIL',
  payload: email,
});

export const saveCurrencies = (currencies) => ({
  type: 'GET_CURRENCIES',
  payload: currencies,
});

export const saveExpenses = (expenses) => ({
  type: 'GET_EXPENSES',
  payload: expenses,
});
