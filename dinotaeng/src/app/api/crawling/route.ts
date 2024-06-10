import MongoDB from "@/lib/MongoDBClass"
import axios from "axios";
import cheerio from "cheerio";
import fs from "fs"
import { useSearchParams } from "next/navigation"

export async function GET (request: Request) {
    try {
        const db = new MongoDB()
        await db.init()

        const { searchParams } = new URL(request.url)
        if (!searchParams.get('collection')) {
            throw Error('Invalid Values')
        }

        if (searchParams.get('collection') == 'gallery') {
            const html = await axios.get("https://dinotaeng.com/?redirect=T/");
            const $ = cheerio.load(html.data);
            const bodyList = $("#main_5 #grid ul li.mun-prd-list");
            for (let k in bodyList) {
                let element:any = bodyList[k]
                if (!element.hasOwnProperty('type')) {
                    continue
                }

                let thumbnail_url:string = $(element).find('a img').attr('src') || ''
                let thumbnail = thumbnail_url?.split('/')[thumbnail_url?.split('/').length-1]
                // await axios.request({
                //     url: thumbnail_url,
                //     responseType: 'stream'
                // }).then((response) => {
                //     response.data.pipe(fs.createWriteStream('public/images/gallery/' + thumbnail))
                // })

                let detail_url:string = $(element).find('a').attr('href') || ''
                const detail = await axios.get('https://dinotaeng.com/' + detail_url); 
                const $$ = cheerio.load(detail.data);
                const thumbList = $$("#mun_addimg .ThumbImage");
                let images = []
                for (let kk in thumbList) {
                    let eelement = thumbList[kk]
                    if (!eelement.hasOwnProperty('type')) {
                        continue
                    }
                    let thumburl:string = $$(eelement).attr('src') || ''
                    let thumbname = thumburl?.split('/')[thumburl?.split('/').length-1]
                    if (thumbnail == 'img_product_small.gif') {
                        continue
                    }
                    // await axios.request({
                    //     url: thumburl,
                    //     responseType: 'stream'
                    // }).then((response) => {
                    //     response.data.pipe(fs.createWriteStream('public/images/gallery/' + thumbname))
                    // })
                    images.push('/images/gallery/' + thumbname)
                }

                let name = $$(".text-Area .name").text()
                let summary = $$(".text-Area .summary").text()
                let simple = $$(".text-Area .simple").html()

                //await axios.get()
                //fs.createWriteStream(thumbnail_url)

                // await db.insert('gallery', {
                //     thumbnail: '/images/gallery/' + thumbnail,
                //     name: name,
                //     summary: summary,
                //     simple: simple,
                //     images: images
                // })
            }
        }

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