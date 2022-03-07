import React, {useState, useRef} from 'react';
import './FilterDropdown.scss';
import {ReactComponent as ArrowDownIcon} from '../../icons/arrow-down.svg';
import {useOutsideClick} from '../../utils/helpers';
import { getRealEstates } from '../../utils/requests';
import { useDispatch } from 'react-redux';

interface FilterDropdownProp {
  title: string,
  options: string[],
  defaultValue: string,
}

const FilterDropdown = (props: FilterDropdownProp) => {
  let dispatch = useDispatch();
  const impactRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  useOutsideClick(impactRef, () => setShowDropdown(false));

  const handleChange = async (option: string) => {
    setSelectedOption(option);
    await getRealEstates(dispatch, true);
  }

  return (
    <div ref={impactRef} className='dropdown-container' onClick={() => setShowDropdown(!showDropdown)}>
      <div>
        <span>{props.title}</span>
        <h4>{selectedOption}</h4>
      </div>
      <div>
        <ArrowDownIcon />
      </div>
      {showDropdown &&
        <div className='dropdown'>
          {props.options.map((item, index) => {
            return (
              <div className={`dropdown-item${item === selectedOption ? ' selected' : ''}`} key={index} onClick={() => handleChange(item)}>{item}</div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default FilterDropdown;