import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Typography } from '@mui/material';

interface DatePickerComponentProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onChangeStart: (date: Date) => void;
  onChangeEnd: (date: Date) => void;
  placeholderText: string;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
  placeholderText,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '40px' }}>
      <div style={{ marginRight: '20px' }}>
        <Typography style={{ marginBottom: '5px', fontSize: '20px', fontWeight: 'bold' }}>Start Date</Typography>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => onChangeStart(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText={placeholderText}
          wrapperClassName="custom-datepicker-wrapper"
          className="custom-datepicker-input"
        />
      </div>

      <div>
        <Typography style={{ marginBottom: '5px', fontSize: '20px', fontWeight: 'bold' }}>End Date</Typography>
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => onChangeEnd(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText={placeholderText}
          wrapperClassName="custom-datepicker-wrapper"
          className="custom-datepicker-input"
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
