interface Story {
    _id: string
    title: string,
    image: string,
    content: string
}
interface Gallery {
    _id: string
    thumbnail: string,
    name: string,
    summary: string,
    simple: string,
    images: string[],
}
interface Characters {
    _id: string
    thumbnail: string,
    name: string,
    description: string,
}
interface ProductDetail {
    _id: string,
    productId: number,
    categoryKey: string[],
    productName : string,
    productThumbnail: string,
    productPrice: number,
    productSalePrice: number,
    reviewCnt: number,
    hitCnt: number,
    likeCnt: number,
    soldCnt: number,
    qnaCnt: number,
    isNew: boolean,
    isBest: boolean,
    productImages: string[],
    productIntro: string,
    description: string,
    detailImages: string[]
}
