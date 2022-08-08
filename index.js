// import { MongoClient, ServerApiVersion } from 'mongodb';
// import mongoose from 'mongoose';
// import util from 'util';
// const uri = "mongodb+srv://madeleine:u7Cv2JPtL5hhpBB@madeleine-magic-app-dat.kpmjw.mongodb.net/?retryWrites=true&w=majority";
// // const uri ="mongodb+srv://madeleine:u7Cv2JPtL5hhpBB@127.0.0.1:27017/?maxPoolSize=20&w=majority"
// // 127.0.0.1:27017
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// // // option 1
// client.connect(err => {
//   const collection = client.db("test").collection("magic");
//   // const cursor = collection.find({});
//   // await cursor.forEach(doc => console.log(doc));
//   // perform actions on the collection object
//   // console.log('collection: ', collection)
//   console.log('collection: ', util.inspect(collection, {showHidden: false, depth: null, colors: true}))
//   client.close();
// })


// u7Cv2JPtL5hhpBB
// RHpKGFk.!6k_Zt_


import mongoose from 'mongoose';
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}