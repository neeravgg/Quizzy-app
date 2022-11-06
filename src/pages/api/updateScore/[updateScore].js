import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { updateScore } = req.query;
  const client = await clientPromise;
  const db = client.db("TestStates");

  if (req.method === "PUT") {
    let bodyObject = JSON.parse(req.body);
    const allPosts = await db.collection("scores").updateOne(
      { slug: updateScore },
      {
        $set: bodyObject,
      },
      { upsert: false }
    );
    res.json(allPosts);
  }
}
