export default function Categories({
    categories,
    selectedCategory,
    onCategorySelect
}) {
    return (
        <section>
            <ul className="categories">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`categories--item ${
                            selectedCategory === category &&
                            'categories--item-selected'
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
