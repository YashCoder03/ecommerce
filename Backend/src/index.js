app = require('./server')

app.get('/',(req,res) => {
    console.log("hiiiiii");
    res.send("hello world");
})
app.post('/', (req,res)=>{
    console.log( req.body);
    res.send('success');
})