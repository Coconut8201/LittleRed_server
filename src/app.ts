import express,{Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { upload } from './httpReq';

const app = express()
const port = 1212

const corsOptions = {
   origin: [
      'http://localhost:5678', //dev front
   ],
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
   allowedHeaders: ['Content-Type'],
   optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
   res.send('This is back')
})

//http://localhost:1212/uploadphoto
app.post('/uploadphoto', upload.array('images', 10), (req:Request, res:Response) => {
   const imageFiles = req.files;
   if (!imageFiles) {
      res.status(400).send('未收到圖片');
      res.send(`photot save fail`);
   }else{
      res.send(`photot save success`)
   }
})

app.listen(port,()=>{
   console.log(`Server: http://localhost:${port}`)
})