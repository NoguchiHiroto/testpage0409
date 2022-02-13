import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
const SendButton = (props) => {
  const labelText = 'TEST FORM';
  const languages = ['C', 'Java', 'Javascript', 'Python', 'PHP'];
  const [plan, setPlan] = useState({
    language: 'Python',
    reward: 0,
    planType: 'test',
    detail: 'detail'
  });
  return (
    <form onSubmit={() => {
      fetch('/api/insert',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plan)
      })
    }
    }>
      <label>
        {labelText}
        <select defaultValue= {plan.language} onChange={(event) => {
          setPlan((beforePlan) => {
            return (
              {
                ...beforePlan,
                language:languages[event.target.options.selectedIndex]
              }
            ) 
          });
          console.log(languages[event.target.options.selectedIndex]);
        }}>

          {languages.map((language, index) => {
            return <option value = {language} key = {index}>{language}</option>
          })}
        </select>
        <input type = 'text' onChange={(event) => {
          setPlan((beforePlan) => {
            return({
              ...beforePlan,
              reward: event.target.value
            })
          })
          console.log(event.target.value);
        }}/>
          <Button variant="contained"  type='submit' endIcon={<SendIcon />}>
            SEND
          </Button>
      </label>
    </form>
  )
}
export default SendButton;