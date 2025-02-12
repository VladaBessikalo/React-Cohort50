import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);

    const toggleFavorite = (id) => {
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favId) => favId !== id)
                : [...prevIds, id]
        );
    };

    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
