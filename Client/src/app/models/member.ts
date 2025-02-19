import { Produto } from "./produto"

export interface Member{
    id: number 
    totalPrice: number
    userName: string
    product: Produto[]
    sendStar: number
    role: any
}

