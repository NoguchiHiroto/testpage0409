import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import { changeStateAction, changePlansAction } from './actions/actions';

const SelectReward = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          報酬金額
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'reward',
            id: 'uncontrolled-native',
          }}
          onChange = {(event) => {
            console.log(event.target.value);
            dispatch(changePlansAction.reward_min(event.target.value - 100000));
            dispatch(changePlansAction.reward_max(event.target.value));
          }}
        >
          <option value = { 100000 }>~10万円</option>
          <option value = { 200000 }>10万円~20万円</option>
          <option value = { 300000 }>20万円~30万円</option>
        </NativeSelect>
      </FormControl>
    </Box>
  )
}

export default SelectReward;