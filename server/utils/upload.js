import multer from 'multer'
import{GridFsStorage} from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url:'mongodb://user:03330369169@blogwebsite-shard-00-00.5azcm.mongodb.net:27017,blogwebsite-shard-00-01.5azcm.mongodb.net:27017,blogwebsite-shard-00-02.5azcm.mongodb.net:27017/MEMORISES?ssl=true&replicaSet=atlas-10mtpa-shard-0&authSource=admin&retryWrites=true&w=majority',
    options:{useNewUrlParser: true, useUnifiedTopology: true},

    file: (request, file)=>{
      const match =  ["image/png", "image/jpg"];
      if(match.indexOf(file.memeType) === -1)
          return `${Date.now()}-blog-${file.originalname}`;
      
      return{
          bucketName:"photos",
          filename:`${Date.now()}-blog-${file.originalname}`
      }
    }

});
export default multer({storage})