import { Typography } from '@mui/material'
import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductsList from 'components/CartProductsList/CartProductsList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
}
const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                style={{
                    margin: ' 30px 0px',
                }}
            >
                Cart
            </Typography>
            <CartProductsList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
