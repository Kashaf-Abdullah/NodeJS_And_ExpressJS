const http= require("http")


const server=http.createServer((req,res)=>{

    res.end('hello')
})


server.listen(8000,"127.0.0.1",
console.log('listening at 8000 port')
);
