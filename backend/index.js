const mysql = require('mysql2');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
// データベースの認証
const connectOptions_root = {
  host: 'Noguchis-MacBook-Pro.local',
  user: 'root',
  password: 'Hiroto0831',
  database: 'test_app'
};
const connectOptions = {
  host: 'Noguchis-MacBook-Pro.local',
  user: 'test_user',
  database: 'test_app'
};

const finalConnectOptions = {
  host: '163.44.185.25',
  user: 'LAA1309682',
  password: 'I6IwtCQI',
  database: 'LAA1309682-ck5te0'
}

const tableName = 'plansTable';
app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "build", 'index.html'));
// });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const connection = mysql.createConnection(connectOptions_root);
connection.connect((err) => {
  if(err) {
    console.log('データベースとのconnectionでエラー');
    throw err;
  } else {
    console.log('connection established');
  }
})

app.get('/api/get/plansTable',(req,res) => {
  const sql = 'SELECT * FROM ' + tableName;
  connection.query(sql,(err, results, fields) => {
    const sendResults = [];
    if(err){
      console.log('接続終了(異常)');
      throw err;
    } else {
      // 新しく追加したものを0番目にする
      for (let i = results.length - 1; i >= 0; i-- ) {
        sendResults.push(results[i]);
      }
    }
    res.json(sendResults);
  });
  console.log('接続終了(正常)');
});
app.get('/api/get/languages',(req,res) => {
  const sql = 'SELECT * FROM languages';
  connection.query(sql,(err, results, fields) => {
    if(err){
      console.log('接続終了(異常)');
      throw err;
    } else {
      console.log(results);
      res.json(results);
      console.log('接続終了(正常)',results);
    }
  });
});

app.post('/api/insert',(req,res) => {
  console.log(req.body);
  let values = '';
  let isInsertOK = true;
  for (column in req.body) {
    if (column === 'reward') {
      values += parseInt(req.body[column]) + ',';
    } 
    else if (column === 'url') {
      values += '"' + req.body[column] + '"';
      if (req.body[column] === '') isInsertOK = false;
    }
    else {
      values += '"' + req.body[column] + '"' + ','
    }
  }
  if(isInsertOK){}
  const sql = 'INSERT INTO ' + tableName + ' VALUES (' + values + ')' ;
  console.log(sql);
  connection.query(sql,(err, results, fields) => {
    if(err){
      console.log('接続終了(異常)');
      throw err;
    }
    res.json();
  });
  console.log('接続終了22(正常)');
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
