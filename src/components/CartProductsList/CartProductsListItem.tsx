import { ProductsProps } from 'components/Products/productsArray'

type Props = {
    product: ProductsProps
    productCount: number
}
const CartProductsListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title} :{productCount}
        </div>
    )
}
export default CartProductsListItem
