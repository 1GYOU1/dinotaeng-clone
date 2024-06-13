import Api from "@/lib/ApiClass"

export const fetchGallery = async () => {
  try {
    const api = new Api()
    const {data} = await api.get('/ax/gallery/list', {})

    return data
  } catch(e:any) {
    return { result: false, message: e.message }
  }
}