const dotenv = require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const next = require('next');
const { mysqlPool } = require('./database');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// GraphQL schema definition
const AppSchema = require('./graphql/schema.js');

function serverShutDown() {
  console.log('Server shutting down.');
  // Close mysql pool connections
  mysqlPool.end();
  process.exit(0);
}

app.prepare()
  .then(() => {
    const server = express();

    server.use('/graphql', graphqlHTTP({
      schema: AppSchema,
      graphiql: true,
      context: {
        // db,
      },
    }));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });

process.on('SIGTERM', () => serverShutDown());
process.on('SIGINT', () => serverShutDown());
