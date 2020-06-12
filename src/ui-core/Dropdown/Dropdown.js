import React from 'react';
import './Dropdown.scss';

const dropdown = (props) => {
  const renderOption = props.items.map((item, index) => (
    <option key={index} className="uc-dd-list__item">{ item }</option>
  ));
  
  return (
    <div className="uc-dropdown">
      <div className="uc-dd__select">
        <select className="uc-dd-list" onChange={(event) => props.onChange(event.target.value)}>
          { renderOption }
        </select>
      </div>
    </div>
  );
};

export default dropdown;