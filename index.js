const express = require('express'); 
const serveIndex = require('serve-index');
const app = express();

app.get('/', function (req, res) {
	res.send("hello");
})

app.get('/sand_pnl', function (req, res) {
// console.log("/reef_pnl")
  res.sendFile("/home/qiuyuyang/python_monitor/sand_config.html");
});

app.use('/graphs', express.static('/home/qiuyuyang/python_monitor/graphs/html'))
app.use('/graphs', serveIndex('/home/qiuyuyang/python_monitor/graphs/html'))

app.listen(8888, "0.0.0.0", function () { 
  console.log('Example app listening on port 8888!');
});
