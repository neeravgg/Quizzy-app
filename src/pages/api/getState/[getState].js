import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { getState } = req.query;
  const client = await clientPromise;
  const db = client.db("TestStates");

  const data = await db.collection("states")
  .aggregate([
    { $match: { slug: getState } },
    { $project: { _id: 0, slug: 0 } },
  ])
  .toArray();
  res.json(data);
}
