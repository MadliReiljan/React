import './ExpenseForm.css'
import { useState, useRef} from 'react'

const ExpenseForm = (props) => {
    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        props.onCancel()
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text" 
                    id='title'
                    ref={titleInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    id='amount'
                    ref={amountInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input 
                    type="date" 
                    min="2023-01-01" 
                    max="2025-01-31" 
                    id='date'
                    ref={dateInputRef}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
                <button type='submit'>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm