/*
 * @Author: dalou
 * @Date: 2021-04-20 18:49:55
 * @LastEditTime: 2021-04-26 08:57:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jike-study/oneWeek/serve.js
 */
const http = require("http")

const server = http.createServer((req, res) => {
	let body = []
	req.on('err', (err) => {
		console.log(err)
	}).on('data', (chunk) => {
		body.push(chunk)
	}).on('end', () => {
		body = Buffer.concat(body).toString()
		res.setHeader('Content-Type', 'text/html')
		res.setHeader('X-Foo', 'bar')
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		res.end(
`<html maaa=a >
<head>
		<style>
body div #myid{
		width:100px;
		background-color: #ff5000;
}
body div img{
	width:30px;
	background-color:#ff1111;
}			
		</style>
</head>
<body>
	<div>
		<img id="myid"/>
		<img />
	</div>
</body>
</html>`)
	})
}).listen(8080)

console.log('serve start')