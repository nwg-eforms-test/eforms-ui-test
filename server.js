const express = require("express");
const app = express();

app.get('/api/brands', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Origin', '*');
    res.send([
        {
            "id": "nwb",
            "name": "NatWest Bank"
        },
        {
            "id": "rbs",
            "name": "Royal Bank of Scotland"
        },
        {
            "id": "ulster",
            "name": "Ulster Bank"
        },
        {
            "id": "coutts",
            "name": "Coutts"
        },
        {
            "id": "lombard",
            "name": "Lombard"
        }
    ])
});

app.listen(3001);