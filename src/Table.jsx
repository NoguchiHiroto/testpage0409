import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'number', label: '案件番号', minWidth: 70 },
  { id: 'name', label: 'タイトル', minWidth: 300 },
  {id: 'reward',label: '報酬',minWidth: 170},
  {id: 'term',label: '期間',minWidth: 170},
  {id: 'detail',label: '業務内容',minWidth: 500},
  {id: 'place',label: '業務場所',minWidth: 170},
  {id: 'neccessarySkills',label: '必要スキル',minWidth: 170},
  {id: 'additionalSkills',label: '尚可スキル',minWidth: 170},
  {id: 'devStyles',label: '開発スタイル',minWidth: 170},
  {id: 'tool',label: 'ツール',minWidth: 170},
  {id: 'others',label: 'その他',minWidth: 170},
];
// const url = 'https://www.tsukuba.ac.jp';

function createData(number, name,  reward, term, detail, place, neccesarrySkills, additionalSkils, devStyles, tool, others) {
  return { 
    number,
    name,
    reward,
    term,
    detail,
    place,
    neccesarrySkills,
    additionalSkils,
    devStyles,
    tool,
    others
  };
}

const rows = [
  createData('01-19',
    '基盤再構築に伴うデータマートリプレース作業支援',
    '800000',
    '1月からの参画いただき、要件定義フェーズ以降も設計、開発フェーズを担当いただきます。',
    '要件定義フェーズで既存データマートの取捨選択、及び統合、改善要望をヒアリングして、リプレース対象のデータマート数、およびデータマート要件を取りまとめる\n新規データマートについては、要件ヒアリングを実施してデータマート要件を定義する。',
    '完全リモート業務\n9:00-18:00',
    'SQL Serverの設計・開発経験(テーブル作成/ストア/パフォーマンスチューニング)*独力で設計・開発できるスキル\nSQL Server Analysisの設計・開発経験*独力で設計・開発できるスキル',
    '',
    '',
    '',
    '募集人数:PM 1名、 SE 2名 \n 面接: 1回'
    ),
  createData(2, 'China', 'CN', 1403500365, 9596961),
  createData(3, 'Italy', 'IT', 60483973, 301340),
  createData(4, 'United States', 'US', 327167434, 9833520),
  createData(5, 'Canada', 'CA', 37602103, 9984670),
  createData(6, 'Australia', 'AU', 25475400, 7692024),
  createData(7, 'Germany', 'DE', 83019200, 357578),
  createData(8, 'Ireland', 'IE', 4857000, 70273),
  createData(9, 'Mexico', 'MX', 126577691, 1972550),
  createData(10, 'Japan', 'JP', 126317000, 377973),
  createData(11, 'France', 'FR', 67022000, 640679),
  createData(12, 'United Kingdom', 'GB', 67545757, 242495),
  createData(13, 'Russia', 'RU', 146793744, 17098246),
  createData(14, 'Nigeria', 'NG', 200962417, 923768),
  createData(15, 'Brazil', 'BR', 210147125, 8515767),
];

const StickyHeadTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if (props.isVisible) {
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 1000}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
  } else {
    return (
      <div>検索ボタンを押すとテーブルが表示されます</div>
    )
  }
}
export default StickyHeadTable;
