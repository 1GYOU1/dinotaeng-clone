import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        if (!searchParams.get('page')
            || !searchParams.get('perPage')
            || !searchParams.get('categoryKey')
        ) {
            throw Error('Invalid Values')
        }

        const db = new MongoDB()
        await db.init()

        let filter:any = {}
        if (searchParams.get('categoryKey') == 'main') {
            filter = {
                'productId': { $in: [275,273,269,268,139,214,198,138,151,12,205,174,203,332,327,326,310,320] }
            }
        } else {
            filter = {
                'categoryKey': { $elemMatch: { $eq: searchParams.get('categoryKey')} }
            }
        }
        
        if (searchParams.get('isNew') == 'Y') {
            filter = {
                ...filter,
                isNew: { $eq: true }
            }
        }
        if (searchParams.get('isBest') == 'Y') {
            filter = {
                ...filter,
                isBest: { $eq: true }
            }
        }
        if (searchParams.get('isSale') == 'Y') {
            filter = {
                ...filter,
                $expr: {
                  $gt: ["$productPrice", "$productSalePrice"]
                }
            }
        }

        let productData:any = await db.query('product', filter, {
            page: searchParams.get('page'),
            perPage: searchParams.get('perPage'),
        })

        let productList:any = []
        for (let k in productData.data) {
            let row = productData.data[k]

            productList.push({
                productId: row.productId,
                productName: row.productName,
                productThumbnail: row.productThumbnail,
                productPrice: row.productPrice,
                productSalePrice: row.productSalePrice,
            })
        }

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : productList,
            'paginate'  : {
                'currentPage'   : productData.currentPage,
                'totalPage'     : productData.totalPage,
                'totalCount'    : productData.totalCount,
            }
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}