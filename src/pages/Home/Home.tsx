import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, price: number, count: number) => void

}

const Home = ({addProductToCart}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginBottom: '40px',
                }}
            >
                List of Products
            </Typography>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}
export default Home
