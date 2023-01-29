import Container from '@mui/material/Container'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ProductPage from 'pages/ProductPage/ProductPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <main
            style={{
                padding: '40px 0',
            }}
        >
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes>
            </Container>
        </main>
    )
}
export default Main
