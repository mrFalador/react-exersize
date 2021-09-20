import React from 'react';

const MySelect = ({option, defaultValue}) => {
    return (
        <select>
          <option disabled value="">{defaultValue}</option>
          {option.map(option =>
                <option key={option.value} value={option}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;