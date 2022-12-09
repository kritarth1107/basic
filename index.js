express = require('express'),
app = express(),

app.get('/', async function(req, res) {
    console.log(new Date())
    console.log(req.headers)
    res.status(200).json(req.headers);
});

app.listen(3000);
console.log("Server Connected")
