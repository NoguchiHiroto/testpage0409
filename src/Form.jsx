import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@mui/styles';


import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

import SendButton from './SendButton.jsx'
import Table from './Table.jsx';

const Form = (props) => {
  // const useStyles = makeStyles({
  //   root: {
  //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //     border: 0,
  //     borderRadius: 3,
  //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //     color: 'white',
  //     height: 100,
  //     padding: '0 30px',
  //   },
  // });
  
  // const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [resultTable, setResultTable] = useState([]);
 

  useEffect(() => {
      fetch('/api/get')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(new Error('データベースの値を取得するのに失敗しました'));
        }
      })
      .then((data) => {
        console.log(data);
      });
  },[]);
  return (
    <div>
      <SendButton />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" type='button' onClick = {() => {
          const visibleFlag = true;
          setIsVisible(visibleFlag);
          fetch('/api/get').then((res) => {
            return res.json();
          }).then(data => {
            setIsVisible(true);
            setResultTable(data);
          })
        }} endIcon={<SearchIcon />}>
          検索
        </Button>
      </Stack>
      <Table isVisible = {isVisible} result = {resultTable} />
    </div>
  )
}
export default Form;