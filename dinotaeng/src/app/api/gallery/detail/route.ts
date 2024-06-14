import MongoDB from "@/lib/MongoDBClass"
import { ObjectId } from "mongodb"

export async function GET (request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        if (!searchParams.get('id')) {
            throw Error('Invalid Values')
        }

        const db = new MongoDB()
        await db.init()
    
        let galleryData:any = await db.queryOne('gallery', {
            "_id": new ObjectId(searchParams.get('id') || '')
        })

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : galleryData
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}