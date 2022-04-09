import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeStateAction } from './actions/actions';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import searchPlans from './search.js';
import styles from './styles.js';

const SearchButton = (props) => {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.planReducer);
  const state = useSelector((state) => state.stateReducer);
  const selectedLanguages = useSelector((state) => state.stateReducer.selectedLanguages);
  return (
    <Button variant = "contained" type = 'button' style = {styles.button} onClick = {() => {
      const searchData = searchPlans(selectedLanguages, plan, state);
      dispatch(changeStateAction.changeResultTable(searchData.resultTable));
      dispatch(changeStateAction.changeSelectedLanguages(searchData.selectedLanguages));
      dispatch(changeStateAction.changeModalOpen(false));
    }} endIcon={<SearchIcon />}>
      検索
    </Button>
  )
}

export default SearchButton;