import React from 'react';
import PropTypes from 'prop-types';

class CountNotification extends React.PureComponent {

    render() {

        const count = this.props.count;

        return (
            <span className="counter">count {count}</span>
        );

    }
}

CountNotification.propTypes = {
    count: PropTypes.number
}

export default CountNotification;
