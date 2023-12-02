import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import DataService from "../../services/DataService";
import { IFiterValues } from "../../models/AggregatedData/IFiterValues";
import { Result } from "../../models/User/IUsers";
import DatePickerComponent from './DatePickerComponent';
import 'react-datepicker/dist/react-datepicker.css';
import RadioButtons from './RadioButtons';
import { Grid } from "@mui/material";


const dataService = new DataService();
const defaultDataState: Result[] = [];
const defaultDataRequest = {
  globalFilterValue: "",
  dateTimeFilterValue: "",
  startDate: new Date("2020-03-11"),
  endDate: new Date("2020-03-13"),
};

export default function Data() {
  const [data, setData] = useState<Result[]>(defaultDataState);
  const [getDataRequest, setGetDataRequest] = useState<IFiterValues>(defaultDataRequest);
  const [startDate, setStartDate] = useState<Date>(defaultDataRequest.startDate);
  const [endDate, setEndDate] = useState<Date>(defaultDataRequest.endDate);

  const handleRadioChange = (filterValues: IFiterValues) => {
    setGetDataRequest(filterValues);
  };

  const handleChangeDataRequest = (dataRequest: IFiterValues) => {
    setGetDataRequest(dataRequest);
  };
  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    setGetDataRequest({
      ...getDataRequest,
      startDate: date,
    });
  };
  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
    setGetDataRequest({
      ...getDataRequest,
      endDate: date,
    });
  };
  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await dataService.GetData({
          ...getDataRequest,
        });

        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    GetData();
  }, [getDataRequest, startDate, endDate]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <RadioButtons filterValues={getDataRequest} onFilterChange={handleRadioChange} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DatePickerComponent
          startDate={startDate}
          endDate={endDate}
          onChangeStart={handleStartDateChange}
          onChangeEnd={handleEndDateChange}
          placeholderText="Select Date"
        />
      </Grid>
      <Grid item xs={12}>
        <DataTable
          gridData={data}
          handleChangeDataRequest={handleChangeDataRequest}
          getGridData={getDataRequest}
        />
      </Grid>
    </Grid>
  );
}
