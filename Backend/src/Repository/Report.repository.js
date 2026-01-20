import { database } from "../lib/db.instance.js";

export async function InsertReport(docs) {
  const collection = await database.Collection(3);
  await collection.insertOne(docs);
}

export async function ReportList() {
  const collection = await db.Collection(3);
  return await collection.find({}).toArray();
}