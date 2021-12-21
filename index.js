const express = require('express'); 
const app = express();

app.get('/', function (req, res) {
	res.send("hello");
})
app.get('/reef_pnl_1', function (req, res) {
// console.log("/reef_pnl")
  res.sendFile("/home/qiuyuyang/python_monitor/reef_pnl_1.html");
});

app.get('/reef_pnl_2', function (req, res) {
// console.log("/reef_pnl")
  res.sendFile("/home/qiuyuyang/python_monitor/reef_pnl_2.html");
});
// app.listen(8888, "0.0.0.0", function () { 
//   console.log('Example app listening on port 8888!');
// });
app.listen(8888, "0.0.0.0", function () { 
  console.log('Example app listening on port 8888!');
});
