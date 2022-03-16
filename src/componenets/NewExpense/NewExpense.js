import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [addNew, setAddNew] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const handleClick = () => {
        setAddNew(true);
    }

    const cancelAddNew = () => {
        setAddNew(false);
    }

    return (
        <div className="new-expense">
            {!addNew && (
                <button onClick={handleClick}>ADD NEW</button>
            )}
            {addNew && (
                <ExpenseForm
                    onSaveExpenseData = {saveExpenseDataHandler}
                    onCancel={cancelAddNew}
                />
            )}
        </div>

    );     
};

export default NewExpense;