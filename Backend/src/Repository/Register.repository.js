import { database } from "../lib/db.instance.js";

/**
 * Handle Registry database insertion
 * @param {Object} doc - User Register Documents 
 */

export async function InsertUserAccount(doc) {

  const collection = await database.Collection(0);
  await collection.insertOne(doc);
  
}
