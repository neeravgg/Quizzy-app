import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { getFinal } = req.query;
  const client = await clientPromise;
  const db = client.db("QuestionBank");

  const allPosts = await db
    .collection(getFinal)
    .aggregate([{ $sample: { size: 25 } }])
    .toArray();
  res.json(allPosts);
}
