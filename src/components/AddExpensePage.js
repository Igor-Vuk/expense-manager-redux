import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

/* FIRST WAY TO DISPATCH ACTION */
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.addExpense(expense)
//         props.history.push('/')
//       }}
//     />
//   </div>
// )

// export default connect(null, {addExpense})(AddExpensePage)


/* CHANGING CODE A LITTLE FOR TESTING */
/* It is complicated to test when inside the code we  call 'addExpense' since this is a function that we exported/imported. To fix this we use 'mapDispatchToProps'. We can use this shorthand to pass the new prop name and action that it calls. This way we can easily just export the component and test it. */

export const AddExpensePage = (props) => {

  const onSubmit = (expense) => {
    props.addExpense(expense)
    props.history.push('/')
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={ onSubmit }/>
    </div>
  )
  
}

export default connect(null, {addExpense: addExpense})(AddExpensePage)


/* SECOND WAY TO DISPATCH ACTION */
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.onSubmit(expense)
//         props.history.push('/')
//       }}
//     />
//   </div>
// )

// const mapDispatchToProps = () => ({
//   onSubmit: (expense) => dispatch(addExpense(expense))
// })

// export default connect(null, {onSubmit: addExpense})(AddExpensePage)


/* THIRD WAY TO DISPATCH ACTION */
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.dispatch(addExpense(expense))
//         props.history.push('/')
//       }}
//     />
//   </div>
// )

// export default connect()(AddExpensePage)