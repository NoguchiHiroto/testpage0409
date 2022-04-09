import React from "react";
import { useLocation } from 'react-router-dom';
import columns from "./../columns.js";
import arrayProperties from "./../arrayProperties.js";

const TableRow = () => {
  const location = useLocation();
  const selectedPlanData = location.state;
  const ret = [];
  columns.forEach((column, index) => {
    if(0 < index && index < columns.length) {
      const tr_height = index === columns.length -1 ? 25 : 18;
      const td_height = (index === 3  || index === 8) ? 10 : (index === columns.length -1 ? 25 : 18);
      ret.push(
        <tr style={{height: tr_height}} key = {index}>
          <td className = 'table-key' style = {{width: '14.8587%', height: td_height}} >{column.label}</td>
          <td className = 'table-value' style = {{width: '85.0501%', height: td_height}} >
          {
            // 配列で準備されているのか文字列で準備されているのかチェック
          arrayProperties.map(arr => arr[0]).includes(columns[0].id) ?
          selectedPlanData[column.id].map((content, index) => {
            return (content === '' ? '' : <li key = {index}>{content}</li>)
          }): 
          selectedPlanData[column.id]
          }
          </td>
        </tr>
      );
    }
  });
  ret.push(
    <tr style={{height: 18}} key = {columns.length}>
      <td className = 'table-key' style = {{width: '14.8587%', height: 10}} >{columns[0].label}</td>
      <td className = 'table-value' style = {{width: '85.0501%', height: 10}} >{selectedPlanData[columns[0].id]}</td>
    </tr>
  )
  return ret;
}

export default TableRow;