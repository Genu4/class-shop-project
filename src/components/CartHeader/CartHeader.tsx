import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
import {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import { useAppSelector } from 'redux/hooks'

type Props = {
    productsInCart?: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
}

function CartHeader() {
    
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <CartProductsList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
