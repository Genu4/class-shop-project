import { useParams } from 'react-router-dom'
import {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import { useAppSelector } from 'redux/hooks'
import './ProductPage.scss'

type ProductsObject = {
    [id: number]: ProductsProps
}

type Props = {}

const ProductPage = (props: Props) => {
    const { id } = useParams()
    console.log(id)
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)


    const productId: string = id || ""
    return <div className="hello">{productsObject[parseInt(productId)].name}</div>
}
export default ProductPage
