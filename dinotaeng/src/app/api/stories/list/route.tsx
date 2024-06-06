import MongoDB from "@/lib/mongodb"

interface Story {
    Title: String,
    Image: String,
    Content: String
}

export async function GET (request: Request) {
    try {
        const db = new MongoDB()
        await db.init()
    
        let storyData:any = await db.query('stories')
        let storyList:Story[] = []
        for (let story of storyData) {
            storyList.push({
                'Title'     : story['title'],
                'Image'     : story['image'],
                'Content'   : story['content'] || '',
            })
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