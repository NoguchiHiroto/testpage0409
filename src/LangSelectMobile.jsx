import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import styles from './styles.js';
import { changeStateAction } from './actions/actions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

function getStyles(name, langName, theme) {
  return {
    fontWeight:
      langName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const LangSelectMobile = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const langName = useSelector((state) => state.stateReducer.selectedLanguages);
  const selectedIndex = useSelector((state) => state.stateReducer.selectedIndex);
  // const [langName, setLangName] = React.useState([]);
  const langs = useSelector((state) => state.stateReducer.selectableLanguages)
  console.log(langs);
  const names = langs.map((lang) => lang.language);
  return (
    <div>
      <FormControl sx={{ m: 0, mt: 1, width: styles.main.width * 0.95 }}>
        <InputLabel id="demo-multiple-chip-label">言語</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={langName}
          onChange={(event) => {
            // setLangName(event.target.value);
            if(event.target.value.includes('全て')) {
              console.log(event.target.value);
              console.log(names.filter(name => name !== '全て'));
              dispatch(changeStateAction.changeSelectedLanguages(names.filter(name => name !== '全て')));
              dispatch(changeStateAction.changeSelectedIndex(selectedIndex.map((value) => true)));
            } else {
              console.log(event.target.value, 'else');
              dispatch(changeStateAction.changeSelectedLanguages(event.target.value));
            }
            
          }}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name, index) => (
            <MenuItem
              key={index}
              value={name}
              style={getStyles(name, langName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default LangSelectMobile;