import { useState, useEffect } from 'react';
import Person from './Person.jsx';
import Button from './Button.jsx';

export default function PersonController() {
    const [person, setPerson] = useState(null);
    const [triggerFetch, setTriggerFetch] = useState(false);

    const getPerson = async () => {
        try {
            const response = await fetch(
                'https://www.randomuser.me/api?results=1'
            );
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const { results } = await response.json();
            console.log('results', results);
            const formattedPerson = {
                first_name: results[0].name.first,
                last_name: results[0].name.last,
                email: results[0].email
            };

            setPerson(formattedPerson);
            console.log(formattedPerson);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (triggerFetch) {
            getPerson();
            setTriggerFetch(false);
        }
    }, [triggerFetch]);

    return (
        <div>
            <Button onClick={() => setTriggerFetch(true)} />
            <Person person={person} />
        </div>
    );
}
