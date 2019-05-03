import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper

beforeEach(()=>{
  editExpenseSpy = jest.fn()
  removeExpenseSpy = jest.fn()
  historySpy = {push: jest.fn()}
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpenseSpy} 
      removeExpense={removeExpenseSpy} 
      history={historySpy}
      expense={expenses[1]}
    />
  )
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  /* Object rest spread transform syntax */
  const {id, ...expense} = expenses[1]
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(editExpenseSpy).toHaveBeenLastCalledWith(id, expense)
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({id: expenses[1].id})
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
})
