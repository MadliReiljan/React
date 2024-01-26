import './Expenses.css'
import ExpenseItem from "./ExpenseItem"

function Expenses(){
    const expenses=[
        {
            date: new Date(2023, 9, 6),
            title: 'New jeans',
            price: 99.99
        },
        {
            date: new Date(2023, 9, 6),
            title: 'New jeans',
            price: 99.99
        }
    ]
    return (
		<div className="expenses">
			<ExpenseItem expenseData={expenses[0]}/>
            <ExpenseItem expenseData={expenses[1]}/>
		</div>
	)
  }

  export default Expenses