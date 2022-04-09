const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();
const languages = ['C', 'Java', 'Javascript', 'Python', 'PHP', 'Ruby', 'R'];
const connectOptions = {
  host: 'Noguchis-MacBook-Pro.local',
  user: 'test_user',
  database: 'test_app'
};
const connectOptions_root = {
  host: 'Noguchis-MacBook-Pro.local',
  user: 'root',
  password: 'Hiroto0831',
  database: 'test_app'
};
// const connectOptions = {
//   host: 'mysql138.phy.lolipop.lan',
//   // host: 'daiki-lead.lolipop.lan',
//   user: 'LAA1309682',
//   password:'I6IwtCQI',
//   // password:'A2nVLqmf',
//   database: 'LAA1309682-ck5te0',
// };
const connection = mysql.createConnection(connectOptions_root);
connection.connect((err) => {
  if(err) {
    console.log('データベースとのconnectionでエラー', err);
    throw err;
  } else {
    console.log('connection established');
  }
})
for (let i = 0; i < languages.length; i++) {
  const sql = `INSERT INTO languages VALUES (${i+1}, "${languages[i]}")` ;
  console.log('sql作成');
  connection.query(sql, (err, results, fields) => {
    if(err){
      console.log('接続終了(異常) sqlのINSERTでエラーです。:', err);
      throw err;
    }
    else console.log('データベースへの追加に成功しました。\n results:', results, 'fileds:', fields);
  });
}

connection.end();