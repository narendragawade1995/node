const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('<h1>welcome to node js !</h1>');
        res.write('<a href="/users">go to user list</a>');
        return res.end()
    }
    if(req.url === '/create-user'){
        const body =[];
        req.on("data",(chunk)=>{
            body.push(chunk);
        });

        return req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
                console.log(message)
                res.statusCode=302;
                res.setHeader("location","/");
                return res.end();
            
        });
    }
    if(req.url === '/users'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<ul><li>narendra Gawade</li><li>narendra Gawade</li><li>narendra Gawade</li></ul> <form action="/create-user" method="POST"><input type="text" name="username" /> <button>add user</button></form>');
         res.end()
    }
})

server.listen(3000)

