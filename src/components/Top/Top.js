import React from "react";
import AddTransactions from "./AddTransactions";

const Top = () => {
  return (
    <div className="top">
      <h1 className="logo">Budget App</h1>
      <div className="forms-wrapper">
        <AddTransactions />
        <AddTransactions isExpense />
      </div>
    </div>
  );
};

export default Top;
