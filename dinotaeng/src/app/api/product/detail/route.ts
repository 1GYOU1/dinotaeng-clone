import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        if (!searchParams.get('productId')) {
            throw Error('Invalid Values')
        }

        const db = new MongoDB()
        await db.init()
    
        let productData:any = await db.queryOne('product', {
            "productId": { $eq: parseInt(searchParams.get('productId')!) }
        })

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : productData
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}