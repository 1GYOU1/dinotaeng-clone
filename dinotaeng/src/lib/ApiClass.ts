import Axios from "axios";

type Props = {
  headers?: any
  params?: any
}

export default class Api {
  ax:any = null

  constructor(param?:Props) {
    this.ax = Axios.create({
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        ...param?.headers
      },
      params: param?.params,
      timeout: 5000,
    })
  }

  async get(url:string, params?:any) {
    return this.ax.get(url, params)
  }
}