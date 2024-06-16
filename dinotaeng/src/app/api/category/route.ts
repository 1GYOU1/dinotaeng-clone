import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const db = new MongoDB()
        await db.init()
    
        let categoryData:any = await db.query('category')

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : categoryData
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}