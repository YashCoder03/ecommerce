app = require('./server')
userRoute = require('./Routes/user.routes')

app.use('/api/v1/user',userRoute);

app.get('/',(req,res) => {
    res.send('its a get request')

})
app.post('/', (req,res)=>{
    res.send('its a post request')
})