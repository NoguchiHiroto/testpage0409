import React from 'react';
import './../../css/tableHTML.css';
import TableRow from './TableRow';
const TableHTML = (props) => {
  return (
    <div>
      <h1>案件詳細ページ2</h1>
      <table style={{width: '95%', height: 171 }} className = 'tableHTML' >
        <tbody>
          <TableRow />
        </tbody>
      </table>
      <p>[contact-form-7 id="362" title="案件応募"]</p>
      <p>注）まだ弊社のエンジニア登録がお隅出ない方の場合は、上記のご連絡とともに自動的に登録されます。ご了承ください。</p>
      <p></p>
      <p>
        <span class="checkmark2 on-color">
          <strong>他の募集案件が見られる、案件一覧はこちら</strong>
        </span>
      </p>
      <p>[st-mybutton url="https://lead-tech.pro/category/job-description/" title="募集案件の一覧はコチラ" rel="" webicon="" target="_blank" color="#fff" bgcolor="#039BE5" bgcolor_top="#29B6F6" bordercolor="#4FC3F7" borderwidth="1" borderradius="5" fontsize="" fontweight="bold" width="" webicon_after="st-svg-angle-right" shadow="#039BE5" ref="on" beacon=""]</p>
      <p></p>
      <p>
        <span class="checkmark2 on-color">
          <strong>エンジニア登録のみご希望の方</strong>
        </span>
      </p>
      <p>[st-mybutton url="https://lead-tech.pro/#detail" title="リードのエンジニア登録はこちら" rel="" webicon="" target="_blank" color="#fff" bgcolor="#cf227e" bgcolor_top="#f44336" bordercolor="#e57373" borderwidth="1" borderradius="5" fontsize="" fontweight="bold" width="" webicon_after="st-svg-angle-right" shadow="#c62828" ref="on"]</p>
      <p></p>
    </div>
  )
}

export default TableHTML;