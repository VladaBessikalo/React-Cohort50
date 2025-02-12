import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext.jsx';
import Header from '../components/Header.jsx';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';
import useFetch from '../hooks/useFetch.js';

export default function ProductDetails() {
    const { id } = useParams();
    const { favoriteIds, toggleFavorite } = useFavorites();
    const {
        data: product,
        loading: loadingProduct,
        error: errorProduct
    } = useFetch(`https://fakestoreapi.com/products/${id}`);

    const isFavorite = favoriteIds.includes(product.id);

    return (
        <div>
            {loadingProduct ? (
                <p>Loading...</p>
            ) : errorProduct ? (
                <p className="error">Error: {errorProduct}</p>
            ) : (
                <div>
                    <Header title={product.title} />
                    <div className="product-details">
                        <p>{product.description}</p>
                        <div className="product-details--img-wrapper">
                            <img
                                src={product.image}
                                alt={product.title}
                                width="200"
                                className="product-details--img"
                            />
                            <div onClick={() => toggleFavorite(product.id)}>
                                <img
                                    src={isFavorite ? heartSolid : heartRegular}
                                    alt="heart"
                                    className="product--fav"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
