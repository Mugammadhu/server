const http=require('http')
const PORT=5000

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    else if(req.url==='/slowPage'){
        res.writeHead(200,{'content-type':'text/html'})
        for(let i=0;i<2000000000;i++){}
        res.write('<h1>Slow Page</h1>')
        res.end() 
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write('404: Not Found')
        res.end()
    }
})

server.listen(PORT,(err)=>{
if(err){
    console.log(err)
}
else{
    console.log('Server is Running')
}
})