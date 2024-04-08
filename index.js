const http = require('http');
const qs = require('querystring');
const collection=require("./mongo")
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end',async () => {
      const formData = qs.parse(body);
      const data={
        name:formData.fullname,   
        status:formData.Department,
        contact:formData.contac
      }
      await collection.insertMany([data]);
      console.log("success");
      res.writeHead(600, {'Content-Type': 'text/html'});
      console.log(`Name: ${formData.fullname}\nPhone number: ${formData.contac} \nstatus:${formData.Department}  `);
      
    });
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(4000, () => {
  console.log('Server running on port 3010');
});
