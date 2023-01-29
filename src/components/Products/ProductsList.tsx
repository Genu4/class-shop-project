import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'

import { useAppSelector } from 'redux/hooks'
type ProductsProps = {
    id: number
    name: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}


const ProductsList = () => {

    const productsArray = useAppSelector(state => state.products)
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        name,
                        desc,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductsProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={name}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
