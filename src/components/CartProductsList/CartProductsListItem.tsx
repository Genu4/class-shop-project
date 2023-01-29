import { ProductsProps } from 'components/Products/productsArray'

type Props = {
    product: ProductsProps
    productCount: number
}
const CartProductsListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.name} :{productCount}
        </div>
    )
}
export default CartProductsListItem
