import MongoDB from "@/lib/mongodb"

export async function GET (request) {
    try {
        const db = new MongoDB()
        await db.init()
    
        let storyData = await db.query('stories')
        let storyList = []
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
    } catch (e) {
        return Response.json({
            'result'    : false,
            'message'   : e.message
        })
    }
}