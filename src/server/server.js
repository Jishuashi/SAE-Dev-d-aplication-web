const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

//middleware server to process json with fs
app.use(cors());

app.get('/domains', async (req, res) => {
    try {
        let jsonData = await parseJSON('./src/pages/domains/domains_info.json');
        res.send(jsonData);
    } catch (err) {
        console.error(err);
    }
});

async function parseJSON(path){
    let data = await fs.promises.readFile(path, 'utf8');
    return JSON.parse(data);
}

app.listen(3001, () => {
    console.log('Server started listening on port 3001');
});