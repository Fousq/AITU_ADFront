import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';


export default function CalendarPage() {
    const now = new Date();
    const nowWrapper = moment(now);
    const [upcomingDate, setUpcomingDate] = useState(new Date());
    const [count, setCount] = useState(moment.duration(nowWrapper.diff(nowWrapper)));

    function handleOnChange(value, event) {
        setCount(moment.duration(moment(value).diff(nowWrapper)));
        setUpcomingDate(value);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const timeDiff = moment(upcomingDate).diff(moment());
            if (timeDiff >= 0) {
                setCount(moment.duration(timeDiff));
            }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [upcomingDate]);

    return (
        <div className='container'>
            <h1>Calendar page</h1>
            <p>Now is {now.toDateString()}</p>
            <p>Upcoming date is {upcomingDate.toDateString()}, time until upcoming date is {count.years()}:{count.months()}:{count.days()} {count.hours()}:{count.minutes()}:{count.seconds()}</p>
            <Calendar className='calendar' onChange={handleOnChange} value={upcomingDate} locale='en-Us' minDate={now}/>
        </div>
    )
};