import { connectToDatabase } from "../../utils/db";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const myData = await db.collection("mycollection").find({}).toArray();

  res.status(200).json(myData);
}