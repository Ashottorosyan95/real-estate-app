import React, {useEffect} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getRealEstates } from '../../utils/requests';
import FilterDropdown from '../dropdowns/FilterDropdown';
import RealEstatesCard from '../realEstatesCard/RealEstatesCard';
import RealEstatesCardSkeleton from '../realEstatesCard/RealEstatesCardSkeleton';
import SearchField from '../searchField/SearchField';
import './Search.scss';

interface RealEstatesCardProp {
  id: number,
  name: string,
  image: string,
  location: string,
  bedrooms: number,
  bathrooms: number,
  price: number,
  type: string,
  created_at: string
}

const Search = () => {
  let dispatch = useDispatch();
  let loadingRealEstates = useSelector((state: RootStateOrAny) => state.realEstates.loadingRealEstates);
  let realEstatesData = useSelector((state: RootStateOrAny) => state.realEstates.realEstatesData);
  
  useEffect(() => {
    getRealEstates(dispatch)
  }, [dispatch])

  return (
    <div className='container'>
      <div className='search-page-grid'>
        <div className='search-page-filters'>
          <FilterDropdown title="Sort by" options={["Date added", "Highest price", "Lowest price"]} defaultValue="Highest price" />
          <FilterDropdown title="Type" options={["Appartment", "Villa", "Townhouse"]} defaultValue="Villa" />
        </div>
        <div>
          <SearchField />
          <div className='real-estates-card-container'>
            {loadingRealEstates ? 
              <>
                {Array(4).fill(null).map((i, idx)=> {
                  return (
                    <RealEstatesCardSkeleton key={idx} />
                  )
                })}
              </> : 
              <>
                {realEstatesData.map((item: RealEstatesCardProp) => {
                  return (
                    <RealEstatesCard key={item.id} realEstate={item} />
                  )
                })}
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search