import productsArray, {
    getProductsObject,
    ProductsProps,
    getProductsPriceObject,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
        
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
    productsPriceObject?: {
        [price: number]: ProductsProps
    }
}

function CartHeader({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    productsPriceObject = getProductsPriceObject(productsArray),
    
}: Props) {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title} :
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div>
                Total: {} $
            </div>
        </div>
    )
}
export default CartHeader
