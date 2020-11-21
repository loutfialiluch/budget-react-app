import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";

const AddTransactions = ({ isExpense }) => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    let newTransaction = {
      id: uuidv4(),
    };

    if (isExpense) {
      newTransaction = {
        ...newTransaction,
        expenseText: transaction,
        expenseAmount: Number(amount),
      };
    } else {
      newTransaction = {
        ...newTransaction,
        incomeText: transaction,
        incomeAmount: Number(amount),
      };
    }
    addTransaction(newTransaction);
    clearForm();
  };
  const clearForm = () => {
    setTransaction("");
    setAmount(0);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`input-group ${isExpense ? "expense" : "income"}`}>
        <input
          type="text"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
          placeholder={`Add ${isExpense ? "Expense..." : "Income..."}`}
          autoComplete="off"
          required
        />
        <input
          type="number"
          placeholder="Amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          autoComplete="off"
          required
        />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AddTransactions;
