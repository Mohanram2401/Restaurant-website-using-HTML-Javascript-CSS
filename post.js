const http = require('http')
const querystring = require('querystring')
var qs, name, passwd
const port = 4000
http.createServer((req, res) => {
    var value = ""
    req.on('data', (ch) => {
        console.log(ch)
        value += ch
        console.log("readable data " + value)
    });
    req.on('end', () => {
        qs = querystring.parse(value)
        console.log(qs)
        name = qs['username']
        passwd = qs['pwd']
        res.write("Welcome " + name + " your Password is " + passwd)
        res.end()
    });
}).listen(port, (error) => {
    if (error) {
        console.log("error occures")
    }
    else {
        console.log("server listening on " + port)
    }
});