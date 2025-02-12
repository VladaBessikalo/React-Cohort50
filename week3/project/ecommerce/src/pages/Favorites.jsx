import { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext.jsx';
import ProductItem from '../components/ProductItem.jsx';
import Header from '../components/Header.jsx';

export function Favorites() {
    const { favoriteIds } = useFavorites();
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        async function fetchFavorites() {
            const products = await Promise.all(
                favoriteIds.map(async (id) => {
                    const res = await fetch(
                        `https://fakestoreapi.com/products/${id}`
                    );
                    return res.json();
                })
            );
            setFavoriteProducts(products);
        }

        if (favoriteIds.length > 0) {
            fetchFavorites();
        } else {
            setFavoriteProducts([]);
        }
    }, [favoriteIds]);

    return (
        <div>
            <Header title="Favorite Products" />
            <div className="fav-list">
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <div>You haven`t chosen any favorites yet!</div>
                )}
            </div>
        </div>
    );
}
