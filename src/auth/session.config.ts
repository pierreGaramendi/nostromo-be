import * as session from 'express-session'
const MongoDBStore = require('connect-mongodb-session')(session);

export const storeMongooseSessions = new MongoDBStore({
    uri: process.env.CONN_MONGO,
    collection: 'sessions'
});

export const initSession = session(
    {
      name: 'nostromo_session_id',
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 120000
      },
      store: storeMongooseSessions
    }
  )