// eslint-disable-next-line react/prop-types
export default function Button({ onClick }) {
    return (
        <div>
            <button type="button" onClick={onClick}>
                Generate random person
            </button>
        </div>
    );
}
