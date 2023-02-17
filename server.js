const http = require('http');
const fs = require('fs');
const frank = require('lodash')


// to create a server
const server = http.createServer((req, res) => {
    // console.log('request made');
    // console.log(req.url, req.method);
        // lodash
        const num = frank.random(0, 20);
        console.log(num);

        const greet = frank.once(()=>{
            console.log('hello');
        });

        greet();
        greet();


    // set header content type
    res.setHeadder('çontent-Type', 'text/plain');
        let path = './views';
        switch(req.url) {
            case'/':
            path += 'index.html';
            res.statusCode = 200;
            break;
            case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            // to redirect a page
            case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
            default:
            path += '404.html';
            res.statusCode = 404;
            break; 
        }
    res.write('hello ninjas');
    res.end();
    // to convert to html code

    res.setHeadder('content-Type', 'text/html');
        // method 1
    res.write(<p>hello, ninjas</p>)
    res.write(<h1>my name is frank ocean</h1>)
    res.end();
    // to write our html 
    res.write('<head><link rel="stylesheet" href="#"></head>')

    // method2
    fs.readFile('./views/index.html', (err, data)=>{
        if(err){
            console.log(err);
        res.end();
        }else{
            // to set status code to our responses
            // res.write(data);

            res.end(); 
        }
    })
});

// to listen to a server in our localhost
server.listen(3000, 'localhost', () =>{
    console.log('listening for request on port 3000')
})