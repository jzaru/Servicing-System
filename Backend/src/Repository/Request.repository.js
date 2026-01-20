import { database } from "../lib/db.instance.js";

/**
  * Handle UserRequest database data insertion
  * @param {Object} docs - Request data Documents
  */

export async function InsertUserRequest(docs) {
  const collection = await database.Collection(2);
  await collection.insertOne(docs);
}

export async function RequestList() {
  const collection = await database.Collection(2);
  return await collection.find({}).toArray();
}