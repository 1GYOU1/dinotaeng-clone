/**
 * MongoDB Class
 */

import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

export default class MongoDB {
  uri:string = "mongodb+srv://dinotaeng:vzQsmjAGK1toVKd2@studydb.tlcucju.mongodb.net/?retryWrites=true&w=majority&appName=StudyDB"
  db:any = null

  constructor() {}

  /**
   * initialize
   */
  async init() {
    const client:MongoClient = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    try {
      await client.connect()

      this.db = client.db("dinotaeng")
    } catch (e) {
      if (client) {
        await client.close()
      }
    }
  }

  /**
   * data insert
   * @param {*} collectionName 
   * @param {*} param 
   */
  async insert(collectionName:string, param:any) {
    try {
      const cursor = this.db.collection(collectionName)
      const result = await cursor.insertOne(param)

      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }

  /**
   * data multi insert
   * @param collectionName 
   * @param param 
   * @returns 
   */
  async insertMulti(collectionName:string, param:any) {
    try {
      const cursor = this.db.collection(collectionName)
      const result = await cursor.insertMany(param, { ordered: true})

      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }

  /**
   * data update
   * @param collectionName 
   * @param filter 
   * @param param 
   * @returns 
   */
  async update(collectionName:string, filter:any, param:any, isUpsert = false) {
    try {
      const options = { upsert: isUpsert }

      if (filter.hasOwnProperty('_id')) {
        filter._id = new ObjectId(filter._id)
      }

      const cursor = this.db.collection(collectionName)
      const r = await cursor.updateOne(filter, {
        $set: param
      }, options)

      console.log(r)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  /**
   * data query
   * @param collectionName 
   * @param filter 
   * @returns 
   */
  async query(collectionName:string, filter = {}) {
    try {
      const result = await this.db.collection(collectionName).find(filter).toArray()

      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
}