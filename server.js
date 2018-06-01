// Page Controller: Angela
const express = require('express'),
      app = express(),
      port = process.env.PORT || 4200,
      bodyParser = require('body-parser'),
      path = require('path'),
      RosieRouter = require('./routes/rosies'),
      ManagerRouter = require('./routes/manager'),
      BuddyRouter = require('./routes/buddy'),
      MentorRouter = require('./routes/mentor'),
      http = require('http').Server(app),
      io = require('socket.io')(http);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/rosies', RosieRouter);
app.use('/api/managers', ManagerRouter);
app.use('/api/buddies', BuddyRouter);
app.use('/api/mentors', MentorRouter);

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the Home Page'})
});

app.get('*', (req, res) => {
  if (isXhr(req)) {
    res.status(404).json({error: 'not found'});
  } else {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  }
});

// https://stackoverflow.com/a/28540611
const isXhr = req => req.xhr || req.headers.accept.indexOf('json') > -1;


http.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

require('./scheduler-app.js')(io);
