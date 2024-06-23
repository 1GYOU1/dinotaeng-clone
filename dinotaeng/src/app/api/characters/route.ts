import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const db = new MongoDB()
        await db.init()
    
        let charactersData:any = await db.query('characters')

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : charactersData
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}