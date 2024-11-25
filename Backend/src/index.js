app = require('./server')

app.get('/',(req,res) => {
    res.send("hello world");
})