import { Button, Card, CardContent, Grid } from '@mui/material'
import { ProductsProps } from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: ProductsProps
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartProductsListItemExtended = ({
    product,
    removeProductFromCart,
    changeProductQuantity,
    productCount,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <div>
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div>{product.title}</div>
                        <p>Price for one item: {product.price}</p>
                        <p>Count: {productCount}</p>
                        <Quantity
                            count={productCount}
                            onDecrement={() =>
                                changeProductQuantity(
                                    product.id,
                                    productCount - 1
                                )
                            }
                            onIncrement={() =>
                                changeProductQuantity(
                                    product.id,
                                    productCount + 1
                                )
                            }
                        />
                        <Button
                            variant="outlined"
                            onClick={() => removeProductFromCart(product.id)}
                        >
                            <DeleteIcon />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExtended
