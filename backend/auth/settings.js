session = require('express-session')
LokiStore = require('connect-loki')(session)
uuid = require('uuid/v4')

app.use(session({
    genid: (req) => {
      return uuid()
    },
    store: new LokiStore({}),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))