import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//Resources
import '../../scss/layouts/calendar.scss';

import events from './data.js';

export class Calendar extends Component {
  componentDidMount() {
    let dates = document.getElementsByClassName('date');
    let eventsList = events;
    let monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for(let i = 0; i < dates.length; i++) {
      for(let j = 0; j < eventsList.length; j++) {
        let eventDate = eventsList[j].local_date;
        let eventYear = eventDate.slice(0, 4);
        let eventMonth = eventDate.slice(5, 7);
        let eventDay = eventDate.slice(8, 10);
        
        let s = eventMonth.replace(/^0+/, '');
        let eventMonthName = monthsName[s];
        

        // console.log(dates[i].dataset.month);
        // console.log(s);
        // console.log('month' + eventMonthName);

        if(dates[i].dataset.month == eventMonthName) {
          if(dates[i].dataset.date == eventDay) {
            let dateId = eventYear + '-' + eventMonthName + '-' + eventDay;
            let el = document.getElementById(dateId);
            ReactDOM.render(<Event event={eventsList[j]} />, el);
          }
        }
      }
    };
  }

  render() {
    let today = {
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let shortMonths = ['Apr', 'Jun', 'Sep', 'Nov'];
    let daysMonth = [];

    let months = monthsName.map((month) => {
      if(month == 'Feb') {
        daysMonth = days.slice(0, 28);
      }
      else if(shortMonths.includes(month)) {
        daysMonth = days.slice(0, 30);
      }
      else {
        daysMonth = days;
      }

      return (
        <Month key={month} month={month} days={daysMonth} year={today.year} />
      )
    });

    return (        
      <Fragment>
        <div className="calendar">
          {months}
        </div>
        <div className="sidebar">
        </div>
      </Fragment>
    );
  }
};

const Month = ({month, days}) => {
  let dates = days.map((date) => (
    <Days key={date} date={date} month={month} year='2018' />
  ));
  return (
    <Fragment>
      {dates}
    </Fragment>
  );
};

const Days = ({date, month, year}) => (
  <div className="date" data-date={date} data-month={month}>
    <h3>{date}</h3>
    <div id={year + '-' + month + '-' + date} className="events"></div>
  </div>
);

const Event = ({event}) => {
  let eventDate = event.local_date;
  let year = eventDate.slice(0, 4);
  let month = eventDate.slice(5, 7);
  let date = eventDate.slice(8, 10);

  return(
    <div data-eventDate={date} data-eventMonth={month} data-eventYear={year} className={'event ' + event.status}>
      <span className="time">{event.local_time}</span>
      <h4 className="name"><a href={event.link} target="_blank">{event.name}</a></h4>
      <span className="group">{event.group.name}</span>
    </div>
  )
};