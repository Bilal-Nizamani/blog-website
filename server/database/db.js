import mongoose from 'mongoose';

const connection = async () => {
    try {
        const URL = process.env.URL;

        await mongoose.connect(URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify: false, });
        
        console.log("connected successfuly");
    } catch (error) {
        console.log('Error while connecting to mongo db', error);

    }
}

export default connection;