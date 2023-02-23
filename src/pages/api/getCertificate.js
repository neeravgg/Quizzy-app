import clientPromise from "../../middleware/connectDb";

export default async function handler(req, res) {
  if (req.method == " GET") {
    const client = await clientPromise;
    const db = client.db("QuestionBank");

    const allPosts = await db.collection("certificates").findOne("certificate");
    res.json(allPosts);
  }
}
