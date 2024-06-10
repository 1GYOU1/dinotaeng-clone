import MongoDB from "@/lib/MongoDBClass"

export async function GET (request: Request) {
    try {
        const db = new MongoDB()
        await db.init()
    
        let storyData:any = await db.query('stories')
        let storyList:Story[] = []
        for (let story of storyData) {
            storyList.push(story)
        }

        return Response.json({
            'result'    : true,
            'message'   : '',
            'data'      : storyList
        })
    } catch (e:any) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}