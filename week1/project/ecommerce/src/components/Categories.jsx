/* eslint-disable react/prop-types */
export default function Categories({
    allCategories,
    onCategorySelect,
    selectedCategory
}) {
    return (
        <section>
            <ul className="categories">
                {allCategories.map((category, index) => (
                    <li
                        key={index}
                        className={`categories--item ${
                            selectedCategory === category
                                ? 'categories--item-selected'
                                : ''
                        }`}
                        onClick={() => onCategorySelect(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
}
