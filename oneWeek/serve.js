/*
 * @Author: dalou
 * @Date: 2021-04-16 18:49:55
 * @LastEditTime: 2021-04-17 15:13:03
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
		console.log(body)
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		// res.setHeader('X-FOO', 'bar')
		// res.setHeader('Content-Type', 'text/html')
		res.end(' Hello world\n')
	})
}).listen(8080)

console.log('serve start')