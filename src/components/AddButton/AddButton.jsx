import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({onClick}) => {

  return (
      <button onClick={onClick}>Add +1</button>
    )

}

AddButton.propTypes = {
  onClick: PropTypes.object
}

export default AddButton;