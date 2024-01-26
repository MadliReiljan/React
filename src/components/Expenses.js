import './Expenses.css'
import Card from './Card'
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
		<Card className="card expenses">
			<ExpenseItem expenseData={expenses[0]}/>
            <ExpenseItem expenseData={expenses[1]}/>
		</Card>
	)
  }

  export default Expenses