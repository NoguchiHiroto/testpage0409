import React, { useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Backdrop, CircularProgress } from '@material-ui/core';
import Table from './tables/resultTable/Table.jsx';
import LangCheckBox from './LangCheckBox.jsx';
import { changeStateAction } from './actions/actions.js';
import Modal from './Modal.jsx';
import arrayProperties from './tables/arrayProperties.js';

const splitLetter = /\n/;
const Form = (props) => {
  const initialResultTable = useSelector((state) => state.stateReducer.resultTable);
  const initialSelectedIndex = useSelector((state) => state.stateReducer.selectedIndex);
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
      
      
  const dispatch = useDispatch();
  const labelText = '案件検索ページ';

  useEffect(() => {
    try {
      if(initialResultTable === null)  {
        fetch('/api/get/plansTable')
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(new Error('データベースの値を取得するのに失敗しました'));
          }
        })
        .then((resData) => {
          const setData = resData;
          // 箇条書きにするために一つの文章を区切り文字を基準に配列化していく
          setData.forEach((data) => {
            Object.keys(arrayProperties).forEach((prop) => {
              data[arrayProperties[prop][0]] = data[arrayProperties[prop][0]].split(splitLetter);
            })
          })
  
          // データベースから取ってきた登録日の項目をDate型にしてStateで保持
          setData.regi_date = new Date(setData.regi_date);
          console.log(('effect'));
          // Stateの更新
          dispatch(changeStateAction.changeData(resData));
          dispatch(changeStateAction.changeResultTable(resData));
          dispatch(changeStateAction.changeProgressPlans(false));
        });
      }

      if (initialSelectedIndex === null) {
        fetch('/api/get/languages')
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(new Error('データベースの値を取得するのに失敗しました'));
          }
        })
        .then(response => {
          const langs = [{id: 0, language: '全て'}];
          response.forEach((res) => {
            langs.push(res);
          });
          langs.push({id: langs.length, language: 'その他の言語'});
          dispatch(changeStateAction.changeSelectableLanguages(langs));
          dispatch(changeStateAction.changeSelectedIndex(langs.map((lang) => false)));
          dispatch(changeStateAction.changeProgressLang(false));
        })
      }
    } catch (e) {
      console.log(e);
    }
  },[dispatch]);

  const progressLang = useSelector((state) => state.stateReducer.progressLang);
  const progressPlans = useSelector((state) => state.stateReducer.progressPlans);

  if(!(progressPlans || progressLang)) {
    return (
      <React.Fragment>
        {/* <h1>{window.screen.availWidth}</h1> */}
        <Modal />
        <LangCheckBox labelText = {labelText} />
        {/* <TableHTML /> */}
        <Table />
      </React.Fragment>
    )}
  else {
    return (
      <React.Fragment>
        <Backdrop open = {progressPlans || progressLang}>
        {/* <Backdrop open = {true}> */}
          <CircularProgress color = 'inherit' />
        </Backdrop>
      </React.Fragment>
    )}
}
export default Form;