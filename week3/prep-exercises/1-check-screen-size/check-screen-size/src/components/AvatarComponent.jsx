/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { BigHead } from '@bigheads/core';

const getRandomProperty = (options) => {
    return options[Math.floor(Math.random() * options.length)];
};

const AvatarComponent = ({ name, properties }) => {
    const [avatarProps, setAvatarProps] = useState(properties);

    useEffect(() => {
        if (!properties) return;

        setAvatarProps({
            ...properties,
            hat: getRandomProperty([
                'none',
                'beanie',
                'turban',
                'party',
                'hijab'
            ]),
            hatColor: getRandomProperty([
                'blue',
                'red',
                'yellow',
                'green',
                'black'
            ]),
            accessory: getRandomProperty([
                'none',
                'roundGlasses',
                'tinyGlasses',
                'shades'
            ]),
            clothing: getRandomProperty([
                'naked',
                'shirt',
                'dressShirt',
                'tankTop'
            ]),
            clothingColor: getRandomProperty([
                'blue',
                'red',
                'green',
                'black',
                'white'
            ]),
            graphic: getRandomProperty(['none', 'react', 'vue', 'gatsby'])
        });
    }, [properties]);

    return (
        <div>
            <h3>{name}</h3>
            <BigHead {...avatarProps} />
        </div>
    );
};

export default AvatarComponent;
