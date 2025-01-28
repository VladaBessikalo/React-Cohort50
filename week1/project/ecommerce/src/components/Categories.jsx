/* eslint-disable react/prop-types */
export default function Categories({ allCategories }) {
    return (
        <section>
            <ul className="categories">
                {allCategories.map((category, index) => (
                    <li key={index} className="categories--item">
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
}
