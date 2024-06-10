import Api from "@/lib/ApiClass"

export const fetchStories = async () => {
  try {
    const api = new Api()
    const {data} = await api.get('/ax/stories/list', {})

    return data
  } catch(e:any) {
    return { result: false, message: e.message }
  }
}