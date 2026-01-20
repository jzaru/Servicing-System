import { database } from "../lib/db.instance.js";

export async function PostAnnouncement(doc) {
  const collection = await database.Collection(1);
  await collection.insertOne(doc);
}

export async function AnnouncementList() {
  const collection = await database.Collection(1);
  return await collection.find({}).toArray();
}