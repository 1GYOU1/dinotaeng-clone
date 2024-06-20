import Api from "@/lib/ApiClass"

export const fetchShopList = async (params :any) => {
    try {
      console.log(params)
      const api = new Api()
      const {data} = await api.get('/ax/product/detail', {
        params: {
          id: params.id
        }
      })
  
      return data
    } catch(e:any) {
      return { result: false, message: e.message }
    }
  }