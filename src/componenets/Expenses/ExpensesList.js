import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpenseList = props => {
    if (props.boom.length === 0) {
        return <h2 className='expenses-list__fallback'>Nothing to look at here</h2>
    }

    return (
        <ul className= 'expenses-list'>
            {props.boom.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
        ))}
        </ul>
    )

};

export default ExpenseList;