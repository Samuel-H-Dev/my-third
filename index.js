import { MongoClient, ObjectId } from "mongodb";
import { mongoURI } from "./secrets.js";

const dbName = "c11-practice";
const collectionName = "myThird";

const mongoConnect = new MongoClient(mongoURI);
await mongoConnect.connect();

const db = mongoConnect.db(dbName);

//CRUD: Read
async function readAll(){
    const readAll= await db.collection(collectionName)
    .find()
    .limit(10)
    .toArray();

    return readAll;
}

//CRUD: Delete
async function deleteOne (id){
    const deleteOne = await db.collection(collectionName)
    .deleteOne( { _id: new ObjectId(id)});

    return deleteOne;
}

////CRUD INSERT
async function insertOne(doc){
    const insertOne = await db.collection(collectionName)
    .insertOne(doc)

    return insertOne;
}



// const dataDocument = {
//     "id": 10,
//     "name": "Scallion",
//     "price": 0.99,
//     "type": "produce",
//     "isBought": true
// }

// const result= await insertOne(dataDocument);



//CRUD: Update

async function updateOne(id, doc){
    const updateOne = await db.collection(collectionName)
    .updateOne(
        {_id: new ObjectId(id)},
        {$set: doc}
    )

    return updateOne;
}



const dataDocument = {
    name: "Green Onion"
};









// const result = await readAll();


// const result = await deleteOne("648b760a05bbe9c9284d830a");

const result = await updateOne("648b760a05bbe9c9284d830b", dataDocument);

console.log(result);



mongoConnect.close();