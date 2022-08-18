const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'test-redis-server', // comes from docker compose services
  port: 6379 // default redis port number
});
client.set('visits', 0);

app.get('/', (req, res) => {
  // process.exit(0); // exit on purpose
  process.exit(10); // put error on purpuse
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});