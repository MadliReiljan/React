import React, { useState, useEffect } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    console.log(editForm ? 'Form edit open' : 'Form edit close');
  }, [editForm]);

  const toggleFormHandler = () => {
    setEditForm((prevEditForm) => !prevEditForm);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditForm(false);
  };

  const onCancelHandler = () => {
    setEditForm(false);
  };

  return (
    <div className='new-expense'>
      {!editForm && <button onClick={toggleFormHandler}>Add New Expense</button>}
      {editForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
