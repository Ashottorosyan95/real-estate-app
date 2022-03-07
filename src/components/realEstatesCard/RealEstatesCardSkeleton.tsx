import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RealEstatesCardSkeleton = () => {
  return (
    <div className='real-estates-card'>
      <div className='real-estates-image'>
        <Skeleton width={260} height={160} />
      </div>
      <div className='real-estates-details'>
        <h3 className='title'>
          <Skeleton width={360} height={24} />
        </h3>
        <div className='location'>
          <Skeleton width={200} height={21} />
        </div>
        <div>
          <Skeleton width={200} height={21} />
        </div>
      </div>
    </div>
  )
}

export default RealEstatesCardSkeleton