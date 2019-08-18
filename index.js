const express = require('express');
const {Client} = require('pg');
const server = express();
const PORT = 3000;

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: '8520',
  database: 'docker',
  port: 5432,
})

client.connect().then(()=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.error('Not connected', err);
})


server.listen(PORT, () => console.log(`Server running on ${PORT}`));

server.get('/', (req, res) => res.status(200).send('Server on docker'));