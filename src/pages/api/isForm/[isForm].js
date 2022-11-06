import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { isForm } = req.query;
  const client = await clientPromise;
  const db = client.db("Forms");

  const isFind =
    (await db.collection("forms").find({ slug: isForm }).count()) > 0
      ? true
      : false;
  res.json(isFind);
}
