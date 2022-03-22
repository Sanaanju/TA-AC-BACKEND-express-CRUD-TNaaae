//  Requires

let express = require('express');
let mongoose = require('mongoose');

// App instanceate

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view MiddleWares

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//  Routing middlewares

app.use('/', require('./routes/index'));
app.use('/students', require('./routes/student'));

//  Error MiddleWares

app.use((req, res, next) => {
  res.send('<h1>Page Not Found</h1>');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
    console.log('server is listening on port 3k')
});
