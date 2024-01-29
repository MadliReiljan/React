import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024')

  const filterChangeHandler = (year) => {
    console.log('Year data in Expenses.js ' + year)
    setFilteredYear(year)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem expenseData={expense} key={expense.id}/>
    })
  }
    
    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear}
        onChangeFilter={filterChangeHandler}/>
        {expensesContent}
      </Card>
    );
};

  export default Expenses