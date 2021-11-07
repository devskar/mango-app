import React from 'react';

interface Props {}

const ExpenseView: React.FC<Props> = () => {
  /* TODO: remove backgroundColor */
  return (
    <div id='expenseView' style={{ backgroundColor: 'red' }}>
      <h1>Expenses</h1>
    </div>
  );
};

export default ExpenseView;
