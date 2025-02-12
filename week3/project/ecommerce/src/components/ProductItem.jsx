import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

export default function ProductItem({ product }) {
    const { favoriteIds, toggleFavorite } = useFavorites();
    const isFavorite = favoriteIds.includes(product.id);

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
                <div onClick={() => toggleFavorite(product.id)}>
                    <img
                        src={isFavorite ? heartSolid : heartRegular}
                        alt="heart"
                        className="product--fav"
                    />
                </div>
            </div>
        </li>
    );
}
