import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
}
const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title} :{' '}
                        {productsInCart[parseInt(productId)]} :{' '}
                        {productsObject[parseInt(productId)].price}{' '}$
                    </div>
                ))}
            </div>
  )
}
export default CartProductsList