import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import moment from 'moment';

import './Calendar.css';

function Calendar() {
  
    const [value, setValue] = React.useState(dayjs('2021-12-11'));

  return (
    <div class="left-side-calendar">
        <div class="calendar-title">
            <p className="title">Calendar</p>
        </div>
        
        <div class="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
              <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div class="date">
          <p className="day"><span>{moment().format('LL')}</span></p>
        </div>
    </div>
  );
}

export default Calendar;