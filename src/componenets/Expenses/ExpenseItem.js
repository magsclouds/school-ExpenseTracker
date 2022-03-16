import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { // props = array of data from App.js
    // function clickHandler () {}
    // title = old title, setTitle = updated title
    //const [title, setTitle] = useState(props.title);
    //console.log({title})

    // on click we change the title
    //const clickHandler = () => {
   //     setTitle('booooomButton!!!!');
        //console.log(title);
    //};

    // <button onClick={clickHandler}>Change Title</button>
    
    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li> 
    );
}

export default ExpenseItem;