import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void

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
            <Reviews />
        </>
    )
}
export default Home
