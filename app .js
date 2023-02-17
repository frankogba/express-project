const express = require('express');
// express app
const app = express();

const currentDate = new Date();

//  register view engine
app.set('view engine', 'ejs');

 

//listen for requests
app.listen(3000, () => {
    console.log('Web application is listening on port 3000');
  });

  app.get('/', (req, res) => {
    const currentDate = new Date();
    if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5 && currentDate.getHours() >= 9 && currentDate.getHours() <= 17) {
      return res.send('Welcome to the web application!');
    }
    return res.send('Sorry, the web application is closed. Please try again during business hours (9:00 AM to 5:00 PM, Monday to Friday).');
  });
  



  app.get('/', (req, res) => {
      res.render('index', {title: 'Home'});
  });


app.get('/contact', (req, res) => {
    res.render('contact', {title: 'About us'});
    });

app.get('/services/create', (req, res) => {
res.render('create', {title: 'Create a service'});
});

    

    // service page
    app.use((req, res)=> {
        res.status(404).render('services', {title: 'offers'});
    })