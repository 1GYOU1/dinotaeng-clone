import Api from "@/lib/ApiClass"

export const fetchMainProduct = async (params :any) => {
  try {
    // console.log(params);
    const api = new Api()
    const {data} = await api.get('/ax/product/list', {
      params: {
        categoryKey: params.categoryKey,
        perPage: params.perPage,
        page: params.page,
      }
    })

    return data
  } catch(e:any) {
    return { result: false, message: e.message }
  }
}