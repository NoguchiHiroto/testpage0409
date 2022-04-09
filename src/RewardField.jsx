import React from 'react';
import NumField from "./NumField.jsx";
import SelectReward from './SelectReward.jsx';
const RewardField = () => {
  if(window.screen.availWidth > 479) {
    return (
      <React.Fragment>
        <NumField isMax = {false} />~
        <NumField isMax = {true}  />
      </React.Fragment>
    )
  }
  else {
    return(
      <SelectReward />
    )
  }
}
export default RewardField;

