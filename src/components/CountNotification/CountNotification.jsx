import React from 'react';
import PropTypes from 'prop-types';

const CountNotification = ({count}) => {

    return (
        <span className="counter">count {count}</span>
    );
    
}

CountNotification.propTypes = {
    count: PropTypes.number
}

export default CountNotification;
