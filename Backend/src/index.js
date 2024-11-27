import app from "./server.js";
import userRoute from "./Routes/user.routes.js";

app.use('/api/v1/user',userRoute);

app.get('/',(req,res) => {
    res.send('its a get request')

})
app.post('/', (req,res)=>{
    res.send('its a post request')
})