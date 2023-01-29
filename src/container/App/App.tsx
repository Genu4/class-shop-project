import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
            </StyledEngineProvider>
        </div>
    )
}
export default App
