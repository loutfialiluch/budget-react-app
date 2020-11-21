import React from "react";
import ExpenseHistory from "./ExpenseHistory";
import IncomeHistory from "./IncomeHistory";

const Middle = () => {
  return (
    <div className="middle">
      <IncomeHistory />
      <ExpenseHistory />
    </div>
  );
};

export default Middle;
