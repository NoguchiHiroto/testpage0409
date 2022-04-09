import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePlansAction } from './actions/actions.js';
import Input from '@mui/material/Input';
const NumField = (props) => {
  const dispatch = useDispatch();
  const inputEl = useRef(0);
  const reward_min = useSelector((state) => state.planReducer.reward_min);
  const reward_max = useSelector((state) => state.planReducer.reward_max);
  // const 
  return(
    <Input inputRef={inputEl} defaultValue={props.isMax ? (reward_max === Infinity ? '' : reward_max) : (reward_min === 0 ? '' : reward_min) } onChange={(event) => {
      if(!isNaN(event.target.value)){
        // 入力された値がParseIntでNaNでないなら1文字ごとにStateを変更、NaNなら入力する前の値をdispatchする
        if(props.isMax){
          if (event.target.value !== ''){
            dispatch(changePlansAction.reward_max(!isNaN(parseInt(event.target.value)) ? parseInt(event.target.value) : reward_max ));
          } else {
            dispatch(changePlansAction.reward_max(Infinity));
          }
        }
        else {
          if (event.target.value !== ''){
            dispatch(changePlansAction.reward_min(!isNaN(parseInt(event.target.value)) ? parseInt(event.target.value) : reward_min ));
          } else {
            dispatch(changePlansAction.reward_min(0));
          }
        }
      } else {
        event.target.value = props.isMax ? (reward_max !== Infinity ? reward_max : '') : (reward_min !== 0 ? reward_min : '');
        return event;
      }
    }}/>
  )
}
export default NumField;