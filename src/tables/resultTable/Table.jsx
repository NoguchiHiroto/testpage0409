import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import './../../css/Table.css';

import arrayProperties from '../arrayProperties.js';
import { changeStateAction } from './../../actions/actions';
import columns from '../columns.js';

function createData(regi_date, title,  reward, term, detail, place, necessarySkills, additionalSkills, devStyles, tool, others, language, url) {
  return { 
    regi_date: regi_date,
    title: title,
    reward: reward,
    term: term,
    detail: detail,
    place: place,
    necessarySkills: necessarySkills,
    additionalSkills: additionalSkills,
    devStyles: devStyles,
    tool: tool,
    others: others,
    language: language,
  };
}


const StickyHeadTable = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rows = useSelector((state) => state.stateReducer.resultTable).map((data) => {
    const setDate = new Date(data.regi_date);
    var year_str = setDate.getFullYear();
    //月だけ+1すること
    var month_str = 1 + setDate.getMonth();
    var day_str = setDate.getDate();
    let format_str = 'YYYY-MM-DD';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    data.regi_date = format_str;
  return createData(
    data.regi_date,
    data.title, 
    data.reward, 
    data.term, 
    data.detail, 
    data.place, 
    data.necessarySkills, 
    data.additionalSkills, 
    data.devStyles, 
    data.tool, 
    data.others,
    data.language,
    );
  });
  const responsiveWidthMax = 479;
  const page = useSelector((state) => state.stateReducer.page)
  const rowsPerPage = useSelector((state) => state.stateReducer.rowsPerPage);
  const handleChangePage = (event, newPage) => {
    dispatch(changeStateAction.changePage(newPage));
  };

  // １ページあたりの行数をユーザーが変更したときの処理
  const handleChangeRowsPerPage = (event) => {
    dispatch(changeStateAction.changeRowsPerPage(+event.target.value));
    dispatch(changeStateAction.changePage(0));
  };
  return(
    <Paper sx = {{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx = {{ maxHeight: 1000}}>
        <Table stickyHeader = {true} aria-label = "sticky table">
          <TableHead >
            <TableRow>
                <TableCell
                key={columns[0].id}
                align={columns[0].align}
                style={{ minWidth: columns[0].minWidth }}
                className = {columns[0].label === 'タイトル' ? 'tableCellTitle' : 'tableCell'}
                sx = {{display: (window.screen.availWidth  < responsiveWidthMax ?  (columns[0].label === 'タイトル' ? 'tableCell' : 'none') : 'tableCell')}}
                >
                  {columns[0].label}
                </TableCell>
                <TableCell
                key={columns[1].id}
                align={columns[1].align}
                style={{ minWidth: columns[1].minWidth }}
                className = {columns[1].label === 'タイトル' ? 'tableCellTitle' : 'tableCell'}
                sx = {{display: (window.screen.availWidth  < responsiveWidthMax ?  (columns[1].label === 'タイトル' ? 'tableCell' : 'none') : 'tableCell')}}
                >
                  {columns[1].label}
                </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const value = row[columns[index].id];
                      let propIndex = null;
                      arrayProperties.forEach((param, index) => {
                        if(param.includes(columns[index].label)) {
                          propIndex = index;
                        }
                      })
                      if(columns[1])
                return (
                  <TableRow hover role = "checkbox" tabIndex = {-1} key = {index}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      let propIndex = null;
                      arrayProperties.forEach((param, index) => {
                        if(param.includes(column.label)) {
                          propIndex = index;
                        }
                      })
                      if(index === 0 || index === 1) {
                        return (
                          <TableCell 
                            className = {column.label === 'タイトル' ? 'tableCellTitle' : 'tableCell'}
                            key = {column.id} 
                            align = {column.align}  
                            sx = {{display: (window.screen.availWidth  < responsiveWidthMax ?  (column.label === 'タイトル' ? 'tableCell' : 'none') : 'tableCell')}}
                            onClick = {() => {
                              dispatch(changeStateAction.changeSelectedPlanData(row));
                              navigate('/detail', {state: row});
                          }}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              // 配列にしなければならない列に値が入っていれば<li>で表示
                              : ((arrayProperties.map(aprop => aprop[1]).includes(column.label) && row[arrayProperties[propIndex][0]][0] !== '') ?
                              <ul>
                                {row[arrayProperties[propIndex][0]].map((content, index) => <li key = {index}>{content}</li>)}
                              </ul>
                              : value)}
                              
                          </TableCell>
                        );
                      }
                    })}
                      
                        
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions = {[10, 25, 100]}
        component = "div"
        count = {rows.length}
        rowsPerPage = {rowsPerPage}
        page = {page}
        onPageChange = {handleChangePage}
        onRowsPerPageChange = {handleChangeRowsPerPage}
      />
  </Paper>
  )
}
export default StickyHeadTable;