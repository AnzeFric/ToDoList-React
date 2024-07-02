import React from 'react';
import { Checkbox } from '@carbon/react';

const CustomCheckbox = ({ labelText, checked, onChange }) => {
  return (
    <div className="custom-checkbox">
      <Checkbox
        id=""
        className="todo-item-checkbox"
        labelText={<h5>{labelText}</h5>}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomCheckbox;
