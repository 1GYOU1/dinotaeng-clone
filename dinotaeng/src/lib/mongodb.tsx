/**
 * MongoDB Class
 */
const { MongoClient, ServerApiVersion } = require('mongodb');

export default class MongoDB {
  uri:String = "mongodb+srv://dinotaeng:vzQsmjAGK1toVKd2@studydb.tlcucju.mongodb.net/?retryWrites=true&w=majority&appName=StudyDB"
  client:any = null
  db:any = null

  constructor() {}

  /**
   * initialize
   */
  async init() {
    try {
      this.client = new MongoClient(this.uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      await this.client.connect()

      this.db = this.client.db("dinotaeng")
    } catch (e) {
      if (this.client) {
        await this.client.close()
      }
    }
  }

  /**
   * data insert
   * @param {*} collectionName 
   * @param {*} param 
   */
  async insert(collectionName:String, param:any) {
    try {
      const cursor = this.db.collection(collectionName)
      const result = await cursor.insertOne(param)

      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }

  async query(collectionName:String, filter = {}) {
    try {
      const result = await this.db.collection(collectionName).find(filter).toArray()

      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
}