import { database } from "../lib/db.instance.js";

/**
 * Handle Login credential validation
 * @param {String} username - User account identity
 */

export async function FindUserbyUsername(username) {
    
  const collection = await database.Collection(0);
  return await collection.findOne({ Username : username });
    
}
