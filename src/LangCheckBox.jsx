import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControllLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import searchPlans from './search.js';
import { changeStateAction } from './actions/actions.js';


import './css/Input.css';
const InputForm = (props) => {
  const dispatch = useDispatch();
  const labelText = props.labelText;
  const languages = useSelector((state) => state.stateReducer.selectableLanguages);  const plan = useSelector((state) => state.planReducer);
  const state = useSelector((state) => state.stateReducer);
  return (
    <div>
      <label>{labelText}</label>
      {/* <p className = 'dev-language'>開発言語</p> */}
      <FormGroup>
        <div  className = 'CheckBox-Wrapper'>
          {languages.map((language,index) => <FormControllLabel control = {<Checkbox />} label = {language.language} key = {index} checked = {state.selectedIndex[index]} onChange = {(event) => {
            const selectedIndex = state.selectedIndex; //押したときのボタンのtrue/falseを格納
            selectedIndex[index] = event.target.checked;
            const setBody = []; // ここに変更後のselectedLanguagesを格納
            if (selectedIndex[0] && index !== 0 && !event.target.checked) {
              selectedIndex[0] = false;
            }
            else if (index === 0 && event.target.checked) {
              selectedIndex.forEach((si , i) => {
                selectedIndex[i] = true;
              })
            }
            else if (index === 0 && !event.target.checked) {
              selectedIndex.forEach((si , i) => {
                selectedIndex[i] = false;
              })
            }
            selectedIndex.forEach((t, i) => {
              if(t){
                setBody.push(languages[i].language);
              } 
            // searchPlans(setBody, plan, state)
            });

            const searchData = searchPlans(setBody, plan, state);
            // 選択された言語のstateを更新
            dispatch(changeStateAction.changePage(0))
            dispatch(changeStateAction.changeSelectedLanguages(setBody));
            dispatch(changeStateAction.changeSelectedIndex(selectedIndex));
            dispatch(changeStateAction.changeResultTable(searchData.resultTable));
          }}
          />)}
        </div>
      </FormGroup>
    </div>
    
  )
}
export default InputForm;