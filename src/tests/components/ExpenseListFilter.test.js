import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'



let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper

beforeEach(() => {
  setTextFilterSpy = jest.fn()
  sortByDateSpy = jest.fn()
  sortByAmountSpy = jest.fn()
  setStartDateSpy = jest.fn()
  setEndDateSpy = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilterSpy}
      sortByDate={sortByDateSpy}
      sortByAmount={sortByAmountSpy}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
  const value = 'rent'
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
  const value = 'date'
  /* We set sortBy to amount before chaging it to date. It's not necessary but it's good practice */
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').at(0).simulate('change', {
    target: {value}
  })
  expect(sortByDateSpy).toHaveBeenCalled()
})

test('should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').at(0).simulate('change', {
    target: {value}
  })
  expect(sortByAmountSpy).toHaveBeenCalled()
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'year') 
  const endDate = moment(0).add(8, 'year')
  wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate})
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate) 
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate) 
})

test('should handle date focus change', () => {
  const calendarFocused = 'endDate'
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})