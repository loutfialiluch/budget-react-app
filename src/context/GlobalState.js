import React, { createContext, useReducer, useEffect } from "react";

import { AppReducer } from "./AppReducer";

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  }, [state]);

  const addTransaction = (transaction) => {
    if (transaction.hasOwnProperty("incomeText")) {
      dispatch({ type: "ADD_INCOME", payload: transaction });
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: transaction });
    }
  };
  const deleteIncome = (id) => {
    dispatch({
      type: "DELETE_INCOME",
      payload: id,
    });
  };
  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addTransaction,
        deleteExpense,
        deleteIncome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
