import PropTypes from 'prop-types';

const Count = ({ count }) => {
    return <h2>Current Count: {count}</h2>;
};

Count.propTypes = {
    count: PropTypes.number.isRequired
};

export default Count;
