import React, { useState } from 'react';

import NewExpense from './componenets/NewExpense/NewExpense';
import Expenses from './componenets/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '1st dummy',
    amount: 100.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: '2nd dummy',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses boom={expenses} />
    </div>
  );
}

export default App;
