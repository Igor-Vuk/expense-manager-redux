import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export const EditExpensePage = (props) => {

  const onSubmit = (expense) => {
    props.editExpense(props.expense.id, expense)
    props.history.push('/')
  }

  const onRemove = () => {
    props.removeExpense({id: props.expense.id})
    props.history.push('/')
  }

  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={onSubmit}
      />
      <button 
        onClick={onRemove}>
        Remove  item
      </button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, {editExpense: editExpense, removeExpense: removeExpense})(EditExpensePage)

/* The second argument to connect is mapDispatchToProps. We can write a shorthand or we can write it like this. */

// const mapDispatchToProps = (dispatch, props) => ({
//   editExpense: (id, expense) => dispatch(editExpense(id, expense)),
//   removeExpense: (data) => dispatch(removeExpense(data))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)