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
      },
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

      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  /**
   * data delete 
   * @param collectionName 
   * @param filter 
   * @returns 
   */
  async deleteOne(collectionName:string, filter:any) {
    try {

      if (filter.hasOwnProperty('_id')) {
        filter._id = new ObjectId(filter._id)
      }

      const cursor = this.db.collection(collectionName)
      const r = await cursor.deleteOne(filter)

      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  /**
   * data delete
   * @param collectionName 
   * @param filter 
   * @returns 
   */
  async deleteMany(collectionName:string, filter:any) {
    try {

      if (filter.hasOwnProperty('_id')) {
        filter._id = new ObjectId(filter._id)
      }

      const cursor = this.db.collection(collectionName)
      const r = await cursor.deleteMany(filter)

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
  async query(collectionName:string, filter = {}, param:any = {}) {
    try {
      let query = this.db.collection(collectionName)

      if (filter) {
        query = query.find(filter)
      }

      if (param?.page && param?.perPage) {
        const totalCount:number = await query.count()
        const totalPage:number = Math.ceil(totalCount / parseInt(param.perPage))

        query = query.skip((parseInt(param.page) - 1) * parseInt(param.perPage)).limit(parseInt(param.perPage))

        return {
          'currentPage': param.page,
          'totalCount': totalCount,
          'totalPage': totalPage,
          'data': await query.toArray()
        }
      }

      return await query.toArray()
    } catch (e) {
      console.log(e)
      return e
    }
  }

  async queryOne(collectionName:string, filter = {}) {
    try {
      const result = await this.db.collection(collectionName).find(filter).toArray()

      return result[0]
    } catch (e) {
      console.log(e)
      return e
    }
  }
}