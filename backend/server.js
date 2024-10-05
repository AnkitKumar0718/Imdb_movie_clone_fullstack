const express=require('express');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const cookieParser = require('cookie-parser');
const cors=require('cors');


const apiDocumentation=require('./html')
const authRoutes=require('./Routes/authRoute');
const movieRoute=require('./Routes/movieRoute')
const bookmarkRoute=require('./Routes/bookmarkRoute')

const connectDB=require('./Database/database');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust as necessary for your frontend URL
    credentials: true // Enable this to allow cookies to be sent
}));

app.get('/', (req, res) => {
    res.send(apiDocumentation())
});

app.use('/api/auth',authRoutes) 
app.use('/api/movie',movieRoute)
app.use('/api',bookmarkRoute)


const PORT=process.env.PORT
connectDB();

app.listen(PORT,()=>{
    console.log('server is listening to port 4000');
})