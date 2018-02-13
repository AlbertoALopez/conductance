# Conductance

## In development
A web application for choir conductors to track their choir members, schedule rehearsals, create stage positions and more.

## Features

* Full stack application using Node and Express on the server, GraphQL and Google Cloud MySQL for database/API and NextJS 
  for server side rendering and routing.
  
## Installation

In order to install you must have Node >= v7.6.0 and NPM installed on your system.

Run `git clone https://github.com/AlbertoALopez/conductance.git && cd ./conductance`.

Create a .env file with the following fields to connect to your own sql instance, either local or remote. For example:

SQL_HOST = localhost\
SQL_USER = dev\
SQL_PASSWORD = password\
SQL_PORT = 3333\
SQL_DB_NAME = test\
SQL_LOCAL_ADDRESS = 99.999.999.99

Start the development server with `npm run dev`. This will spin up the Express server and serve up the bundled JavaScript
automatically courtesy of NextJS.

To run a production instance, use `npm run build`. This will create a bundle in root/.next/dist. Then, run
`npm run start` to spin up the production express server.
