const http = require('http');

const dataControler = (request,respod)=>
{
    respod.write("<h1> Hello,This Shivam </h1>");
    respod.end();
}

http.createServer(dataControler).listen(4500);