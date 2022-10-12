import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://madeleine:<password>@madeleine-magic-app-dat.kpmjw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('collection: ', collection);
  client.close();
});





// import mongoose from 'mongoose';
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
// }