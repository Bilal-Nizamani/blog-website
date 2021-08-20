import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  dotenv  from 'dotenv';
import cookieParser from 'cookie-parser';


//components 
import connection from './database/db.js';
import Router from './routes/route.js';

const app = express();

app.use(cookieParser());
dotenv.config({path:'./config.env'});

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);


const port = process.env.PORT || 5000;

app.listen(port,()=>(console.log(`listening on port ${port}`)));


connection();