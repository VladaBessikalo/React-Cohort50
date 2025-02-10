import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <li className="products--item">
            <div className="product">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product--image"
                    />
                    <div className="product--title">{product.title}</div>
                </Link>
            </div>
        </li>
    );
}
