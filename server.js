const express = require('express');
const graphqlHTTP = require('express-graphql');
const next = require('next');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello World!';
  },
};

app.prepare()
  .then(() => {
    const server = express();

    server.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
});