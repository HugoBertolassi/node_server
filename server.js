const http=require("http");
const port  =   3000;

const server = http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end('curso de node');
})

server.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})


// const const express = require('express');
// const app = express();
// const port = process.env.PORT || =;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
