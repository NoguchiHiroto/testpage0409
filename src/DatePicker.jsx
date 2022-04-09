import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

import { changePlansAction } from './actions/actions.js';

export default function ResponsiveDatePickers(props) {
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState(new Date());
  const date_min = useSelector((state) => state.planReducer.date_min);
  const date_max = useSelector((state) => state.planReducer.date_max);
  const DatePickerMobile = (props) => {
    return (
      <MobileDatePicker
        label= {props.label}
        value={props.isDate_max ? date_max : date_min}
        minDate={new Date('2017-01-01')}
        maxDate = {new Date()}
        sx = {{margin: 0}}
        onChange={(newValue) => {
          // 日時の範囲指定の最大の方かどうか
          if (props.isDate_max) {
            console.log(date_max);
            dispatch(changePlansAction.date_max(newValue));
          } 
          else {
            dispatch(changePlansAction.date_min(newValue));
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    )
  }

  const DatePickerDesktop = (props) => {
    return (
      <DesktopDatePicker
        label = {props.label}
        value = {props.isDate_max ? date_max : date_min}
        minDate = {new Date('2017-01-01')}
        maxDate = {new Date()}
        onChange = {(newValue) => {
          if (props.isDate_max) {
            dispatch(changePlansAction.date_max(newValue));
          }
          else {
            dispatch(changePlansAction.date_min(newValue));
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    ) 
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <Stack spacing={3} direction = {'row'} sx ={{mt: 2, mb:5}}>
        {
          window.screen.availWidth > 497 ? 
          (
            <React.Fragment>
              <DatePickerDesktop isDate_max = {false} label ={'いつから'}/> 
              <DatePickerDesktop isDate_max = {true} label ={'いつまで'}/>
            </React.Fragment>
          )
          : (
            <React.Fragment>
              <DatePickerMobile isDate_max = {false} label = {'いつから'} />
              <DatePickerMobile isDate_max = {true} label = {'いつまで'} />
            </React.Fragment>
          )
        }
        {/* <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={props.isDate_max ? date_max : date_min}
          minDate={new Date('2017-01-01')}
          maxDate = {new Date()}
          onChange={(newValue) => {
            if (props.isDate_max) {
              dispatch(changePlansAction.date_max(newValue));
            }
            else {
              dispatch(changePlansAction.date_min(newValue));
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>
  );
}
