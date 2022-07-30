const express = require('express'); 
const serveIndex = require('serve-index');
const app = express();

app.get('/', function (req, res) {
	res.send("hello");
})

app.use('/graphs', express.static('/home/qiuyuyang/python_monitor/graphs/html'))
app.use('/graphs', serveIndex('/home/qiuyuyang/python_monitor/graphs/html'))
app.use('/tri_graphs', express.static('/home/qiuyuyang/python_monitor/tri_graphs/html'))
app.use('/tri_graphs', serveIndex('/home/qiuyuyang/python_monitor/tri_graphs/html'))
// app.use('/pnl_graphs', express.static('/home/qiuyuyang/python_monitor/pnls/html'))
// app.use('/pnl_graphs', serveIndex('/home/qiuyuyang/python_monitor/pnls/html'))

app.listen(8888, "0.0.0.0", function () { 
  console.log('Example app listening on port 8888!');
});
