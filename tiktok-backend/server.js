import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js';


//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeaders('Access-Control-Allow-Origin', '*'),
    res.setHeaders('Access-Control-Allow-Headers', '*'),
    next();

});

//Db config
const connectionUrl = 'mongodb+srv://ukonuzoidx:Ukonuzoidx07@cluster0.kwkoq.mongodb.net/tiktok?retryWrites=true&w=majority';


mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//api endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res)=> {
    Videos.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    //POST request is to ADD DATA to the database
    //It will let us ADD a video Document to the video COLLECTION
    const dbVideos = req.body
    
    Videos.create(dbVideos, (err, data)=> {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
})

//listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));

