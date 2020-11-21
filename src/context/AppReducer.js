export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case "DELETE_INCOME":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (income) => income.id !== action.payload
        ),
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenseTransactions: state.expenseTransactions.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
