import { Button, Card, CardContent, Grid } from '@mui/material'
import { ProductsProps } from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch } from 'redux/hooks'
import { removeProductFromCart, changeProductQuantity } from 'redux/cartReducer'

type Props = {
    product: ProductsProps
    productCount: number
    
}
const CartProductsListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <div>
                        <div className="product-img">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div>{product.name}</div>
                        <p>Price for one item: {product.price}</p>
                        <p>Count: {productCount}</p>
                        <Quantity
                            count={productCount}
                            onDecrement={() =>
                                productCount === 1
                                    ? dispatch(
                                          removeProductFromCart(product.id)
                                      )
                                    : dispatch(
                                          changeProductQuantity({
                                              id: product.id,
                                              count: productCount - 1,
                                          })
                                      )
                            }
                            onIncrement={() =>
                                dispatch(
                                    changeProductQuantity({
                                        id: product.id,
                                        count: productCount + 1,
                                    })
                                )
                            }
                            minCount={0}
                        />
                        <Button
                            variant="outlined"
                            onClick={() =>
                                dispatch(removeProductFromCart(product.id))
                            }
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
