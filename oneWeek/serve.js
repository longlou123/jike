const http = require("http")

const server = http.createServer((req, res)=>{
	let body = []
	req.on('err', (err) =>{
		console.log(err)
	}).on('data', (chunk) =>{
		body.push(chunk.toString())
	}).on('end', ()=>{
		body = Buffer.concat(body).toString()
		console.log(body)
		res.writeHead(200, {'Content-Type': 'text/plain'})
		// res.setHeader('X-FOO', 'bar')
		// res.setHeader('Content-Type', 'text/html')
		res.end(' Hello world\n')
	})	
}).listen(8080)

console.log('serve start')