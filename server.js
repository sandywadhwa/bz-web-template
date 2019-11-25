const express = require('express')
const app = express()
const config = require('./backend/settings/config');

const port = config.port;

app.use(express.static('frontend'))

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/views/index.html'));

app.get('/api', (req, res) => res.json({ 'name': config.appName, 'version': config.apiVersion}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

