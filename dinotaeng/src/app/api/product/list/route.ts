import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        if (!searchParams.get('page')
            || !searchParams.get('perPage')
        ) {
            throw Error('Invalid Values')
        }

        const db = new MongoDB()
        await db.init()

        let filter:any = {
            'categoryKey': { $eq: searchParams.get('categoryKey') }
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