import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({description, amount, createdAt, id}) => (
  <div>
    <Link to = {`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
  </div>
)

export default ExpenseListItem



/* if we wanna put remove button in this component */
// import { connect } from 'react-redux'
// import { removeExpense } from '../actions/expenses'

// const ExpenseListItem = ({...props, description, amount, createdAt, id}) => (
//   <div>
//     <Link to = {`/edit/${id}`}><h3>{description}</h3></Link>
//     <p>{amount} - {createdAt}</p>
//     <button onClick={() => {props.removeExpense({id})}}>Remove item</button>
//   </div>  
// )

// export default connect(null, {removeExpense})(ExpenseListItem) 