import React from 'react';
import styled, { withTheme } from 'styled-components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Redirect } from 'react-router';
import './SearchBar.css';
import 'moment/locale/ko';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }
  alertStartDate = () => {
    alert(this.state.startDate);
  };
  alertEndDate = () => {
    alert(this.state.endDate);
  };

  render() {
    return (
      <>
        <Calendar>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </Calendar>
      </>
    );
  }
}

const Calendar = styled.div`
  display: flex;
  justify-content: center;
`;

export default SearchBar;
