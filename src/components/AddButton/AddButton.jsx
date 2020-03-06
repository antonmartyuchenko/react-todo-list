import React from 'react';
import PropTypes from 'prop-types';

function AddButton(props){

  return (
      <button onClick={props.onClick}>Add +1</button>
    )

}

AddButton.propTypes = {
  onClick: PropTypes.object
}

export default AddButton;