import React from 'react';
import PropTypes from 'prop-types';

function CountNotification(props) {

    const count = props.count;

    return (
        <span className="counter">count {count}</span>
    );
    
}

CountNotification.propTypes = {
    count: PropTypes.number
}

export default CountNotification;
