/* eslint-disable react/prop-types */
export default function Person({ person }) {
    if (!person) {
        return null;
    }
    return (
        <div>
            <ul>
                <li>First Name: {person.first_name}</li>
                <li>Last Name: {person.last_name}</li>
                <li>Email: {person.email}</li>
            </ul>
        </div>
    );
}
