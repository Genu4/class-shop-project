import {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import { useAppSelector } from 'redux/hooks'
import CartProductsListItem from './CartProductsListItem'

type ProductsObject = {
    [id: number]: ProductsProps
}

type Props = {
    productsInCart: {
        [id: number]: number
    }

    CartItem?: any
}
const CartProductsList = ({
    productsInCart,
    CartItem = CartProductsListItem,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

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
