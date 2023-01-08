import Container from '@mui/material/Container'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Main = ({ addProductToCart }: Props) => {
    return (
        <main
            style={{
                padding: '40px 0',
            }}
        >
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </main>
    )
}
export default Main
