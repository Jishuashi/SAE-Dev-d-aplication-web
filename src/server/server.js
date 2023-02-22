const express = require('express');
const fs = require('fs');
const cors = require('cors');
const https = require('https');
const app = express();

var options = {
	key: fs.readFileSync('/etc/apache2/ssl/openssl.key'),
	cert: fs.readFileSync('/etc/apache2/ssl/openssl.crt')
}
//middleware server to process json with fs
app.use(cors({
	origin: '*',
	methods: ['GET','POST'],
	allowedHeaders: ['Content-Type', 'Authorization']
}));
https.createServer(options,app).listen(3001);

app.get('/domains', async (req, res) => {
    try {
        let jsonData = await parseJSON('./src/pages/domains/domains_info.json');
        res.send(jsonData);
    } catch (err) {
        console.error(err);
    }
});

app.get('/domains/modules', async (req, res) => {
    try {
        let jsonData = await parseJSON('./src/pages/domains/modules/modules_info.json');
        res.send(jsonData);
    } catch (err) {
        console.error(err);
    }
});

async function parseJSON(path){
    let data = await fs.promises.readFile(path, 'utf8');
    return JSON.parse(data);
}
