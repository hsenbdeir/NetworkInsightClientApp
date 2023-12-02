import React from 'react';
import { FormControl, Radio, RadioGroup, FormControlLabel, Box, Typography } from '@mui/material';
import { IFiterValues } from '../../models/AggregatedData/IFiterValues';

interface RadioButtonsProps {
  filterValues: IFiterValues;
  onFilterChange: (filterValues: IFiterValues) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ filterValues, onFilterChange }) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filterValues, [name]: value });
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px', color: '#555' }}>
        Please click the filters to see the data.
      </Typography>

      <Box display="flex" flexDirection="row" alignItems="center">
        <FormControl component="fieldset">
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
            Global Filter
          </Typography>
          <RadioGroup
            aria-label="Global Filter"
            name="globalFilterValue"
            value={filterValues.globalFilterValue || 'NeType'} // Set default value 'NeType'
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel value="NeType" control={<Radio />} label="NeType" />
            <FormControlLabel value="NeAlias" control={<Radio />} label="NeAlias" />
          </RadioGroup>
        </FormControl>

        <Box ml={4} />

        <FormControl component="fieldset">
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
            Type of data
          </Typography>
          <RadioGroup
            aria-label="Type of data"
            name="dateTimeFilterValue"
            value={filterValues.dateTimeFilterValue || 'Hourly'} // Set default value 'Hourly'
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel value="Hourly" control={<Radio />} label="Hourly" />
            <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RadioButtons;
