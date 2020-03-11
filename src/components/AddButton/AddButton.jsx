import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({onClick}) => {

  return (
      <button className="addButton" onClick={onClick}>Add task</button>
    )

}

AddButton.propTypes = {
  onClick: PropTypes.object
}

export default AddButton;