/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../backend/index.js":
/*!***************************!*\
  !*** ../backend/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst app = express();\nconst port = process.env.PORT || 3001;\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nlet data = ''; // データベースの認証\n\nconst connectOptions_root = {\n  host: 'Noguchis-MacBook-Pro.local',\n  user: 'root',\n  password: 'Hiroto0831',\n  database: 'test_app'\n};\nconst connectOptions = {\n  host: 'Noguchis-MacBook-Pro.local',\n  user: 'test_user',\n  database: 'test_app'\n};\nconst finalConnectOptions = {\n  host: '163.44.185.25',\n  user: 'LAA1309682',\n  password: 'I6IwtCQI',\n  database: 'LAA1309682-ck5te0'\n};\nconst tableName = 'homepage';\napp.use(express.static(path.join(__dirname, '../frontend/build')));\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\napp.use(bodyParser.json());\nconst connection = mysql.createConnection(connectOptions);\napp.get('/api/get', (req, res) => {\n  console.log('get来ました👹');\n  const sql = 'SELECT * FROM ' + tableName;\n  connection.query(sql, (err, results, fields) => {\n    if (err) {\n      console.log('接続終了(異常)');\n      throw err;\n    }\n\n    res.json(results);\n  });\n  console.log('接続終了(正常)');\n});\napp.post('/api/insert', (req, res) => {\n  console.log(req.body);\n  const sql = 'INSERT INTO ' + tableName + ' VALUES (' + '\"' + req.body.language + '\"' + ',' + parseInt(req.body.reward) + ',' + '\"' + req.body.planType + '\"' + ',' + '\"' + req.body.detail + '\"' + ')';\n  console.log(sql);\n  connection.query(sql, (err, results, fields) => {\n    if (err) {\n      console.log('接続終了(異常)');\n      throw err;\n    }\n\n    res.json();\n  });\n  console.log('接続終了22(正常)');\n});\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));\n});\napp.listen(port, () => {\n  console.log(`listening on *:${port}`);\n});\n\n//# sourceURL=webpack://frontend/../backend/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../backend/index.js");
/******/ 	
/******/ })()
;