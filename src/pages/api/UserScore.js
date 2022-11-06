import clientPromise from "../../middleware/connectDb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("TestStates");

  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    let myPost = await db.collection("scores").insertOne(bodyObject);
    res.json(myPost);
  }
}
