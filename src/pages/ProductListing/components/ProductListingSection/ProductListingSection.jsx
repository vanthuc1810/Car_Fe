import { ProductItem } from './components/ProductItem/ProductItem';
import './ProductListingSection.scss';
export const ProductListingSection = ({listCar}) => {
    const names = ["Alice", "Bob", "Charlie", "Charlie", "Charlie", "Charlie", "Charlie", "Charlie"];    
    return (
       <div className="product-card-container">
        {
            listCar?.map((car, index) => (
                <ProductItem car={car} key={index}/>
            ))
        }
       </div>
    );
}