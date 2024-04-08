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
        const email=formData.username;
        const pwd=formData.Mail;
        await collection.findOneAndUpdate({name:email},{$set:{status:pwd}}).then((result)=>
        {
          if(!result){
            throw err;
          }
          else{
              console.log("updated");
          }
        })
        res.end("User details updated successfully");
});
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(7000, () => {
  console.log('Server running on port 5000');
});
