import React from 'react';
import PropTypes from 'prop-types';

class AddButton extends React.PureComponent{

  render() {
    return (
      <button onClick={this.props.onClick}>Add +1</button>
    )
  }

}

AddButton.propTypes = {
  onClick: PropTypes.object
}

export default AddButton;