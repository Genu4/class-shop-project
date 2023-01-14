import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import CartProductsListItem from './CartProductsListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
    CartItem?: any
}
const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductsListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default CartProductsList
