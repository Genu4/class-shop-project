import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type ProductsInCart = {
    [id: number]: number
}
const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        // 1: 5,
        // 2: 5,
        
    })

    const addProductToCart = (id:number, count:number) => {
        setProductsInCart((prevState:ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count
        }))
    }

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main addProductToCart={addProductToCart} />
            </StyledEngineProvider>
        </div>
    )
}
export default App
