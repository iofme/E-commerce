import { FeedBack } from "./feedback"

export interface Produto{
    id: number
    nameProduct: string
    feedBack: FeedBack[]
    price: number
    avgStar: number
    description: string
    type: string
    style: string
    gender: any
    colors: string[]
    size: string
    quantidade: number
    created: string
}