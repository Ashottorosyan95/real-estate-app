import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import './SearchField.scss';
import {ReactComponent as SearchIcon} from '../../icons/search.svg';
import { getRealEstates } from '../../utils/requests';

const SearchField = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  let dispatch = useDispatch();

  const handleSearchClick = async () => {
    if(searchValue) {
      setLoading(true);
      setSearchValue('');
      await getRealEstates(dispatch, true, setLoading);
    }
  }

  return (
    <div className='search-field'>
      <div className='search-icon'>
        <SearchIcon />
      </div>
      <div className='search-input'>
        <input placeholder='Plaats, buurt, adres, etc.' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className='search-button'>
        <button type="button" disabled={loading || !searchValue} onClick={handleSearchClick}>
          {loading ?
            <ClipLoader color={"#ffffff"} size={24} /> : 'Search'
          }
        </button>
      </div>
    </div>
  )
}

export default SearchField