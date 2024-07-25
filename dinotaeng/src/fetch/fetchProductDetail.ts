import Api from "@/lib/ApiClass"

export const fetchProductDetail = async (params :any) => {
  try {
    console.log("2.")
    console.log(params)
    const api = new Api()
    const {data} = await api.get('/ax/product/detail', {
      params: {
        productId: params.productId,
      }
    })

    console.log("3.")
    console.log({
      productId: params.productId,
    })
    return data
  } catch(e:any) {
    return { result: false, message: e.message }
  }
}