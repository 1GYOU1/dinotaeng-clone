import Api from "@/lib/ApiClass"

export const fetchStoriesDetail = async (params :any) => {
  try {
    // console.log(params)
    const api = new Api()
    const {data} = await api.get('/ax/stories/list', {
      params: {
        id: params.id
      }
    })

    return data
  } catch(e:any) {
    return { result: false, message: e.message }
  }
}