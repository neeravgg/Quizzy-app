import clientPromise from "../../middleware/connectDb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Forms");

  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    let myPost = await db.collection("forms").insertOne(bodyObject);
    res.json(myPost);
  }
}
