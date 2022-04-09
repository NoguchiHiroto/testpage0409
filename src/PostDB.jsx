import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const PostDB = (props) => {
  return (
    <form onSubmit={() => {
      if (!isNaN(parseInt(props.plan.reward))) {
        fetch('/api/insert',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props.plan)
        })
      } else {
        window.alert('報酬は整数で入力してください');
      }
    }
    }>
      <Button variant="contained"  type='submit' endIcon={<SendIcon />}>
        SEND
      </Button>
    </form>
  )
}
export default PostDB;