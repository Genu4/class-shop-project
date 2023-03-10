import Container from '@mui/material/Container'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
}
const Main = ({
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
    productsInCart,
}: Props) => {
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
                    <Route path="about" element={<AboutPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </main>
    )
}
export default Main
