import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set deafult state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  }
  const state = expensesReducer(undefined, action)
  expect(state).toEqual([expenses[2]])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '345fse'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates: {
      description: 'Edit Rent',
      note: '',
      amount: 245,
      createdAt: moment(0).subtract(2, 'days').valueOf()
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], {...action.updates, id: '2'}, expenses[2]])
})

test('should not edit an expense id id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates: {
      description: 'Edit Rent',
      note: '',
      amount: 245,
      createdAt: moment(0).subtract(2, 'days').valueOf()
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})