import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }))
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    if(e.target.value === "date") {
      this.props.sortByDate()
    } else if (e.target.value === "amount") {
      this.props.sortByAmount()
    }
  }

  render() {
    return (
      <div>

        <div>
          <input 
            type="text" 
            value={this.props.filters.text} 
            onChange={this.onTextChange}
          />
        </div>
       
        <br/>

        <div>
          <select
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
        </div>
       
        <br/>

     
        <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

/* first way to dispatch actions */
export default connect(mapStateToProps, {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate})(ExpenseListFilters)



/* second way to dispatch actions. For this to work we must also import it differently at the top of the page */

// import * as filtersAction from '../actions/filters'

// export default connect(mapStateToProps, filtersAction)(ExpenseListFilters)


/* third way to dispatch actions by defining mapStateToProps and mapDispatchToProps*/

// const mapDispatchToProps = (dispatch) => ({
//   setTextFilter: (value) => dispatch(setTextFilter(value)),
//   setStartDate: (startDate) => dispatch(setStartDate(startDate)),
//   setEndDate: (endDate) => dispatch(setEndDate(endDate)),
//   sortByDate: () => dispatch(sortByDate()),
//   sortByAmount: () => dispatch(sortByAmount())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)