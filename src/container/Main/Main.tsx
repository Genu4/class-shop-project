import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'

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
                <Home addProductToCart={addProductToCart} />
            </Container>
        </main>
    )
}
export default Main
