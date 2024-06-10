import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const db = new MongoDB()
        await db.init()
    
        let galleryData:any = await db.query('gallery')

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : []
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}