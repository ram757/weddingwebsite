import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css';
import './style.scss';
import { CALENDAR_EVENT_DETAILS } from '../../hidden/eventDetailsContent';

const AddToCalendarButton = () => {
  return (
    <AddToCalendar
      event={CALENDAR_EVENT_DETAILS}
      buttonLabel="Add to Calendar"
      buttonTemplate={{ 'calendar-plus-o': 'left' }}
    />
  );
};

export default AddToCalendarButton;
