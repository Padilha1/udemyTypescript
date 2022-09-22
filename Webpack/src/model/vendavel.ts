export default interface Vendavel{
    name: string
    price: number
    discount: number
    priceDiscount(): number
}