import React from 'react'
import './JobOpeningsSkeleton.css'
import Skeleton from 'react-loading-skeleton';

function JobOpeningsSkeleton() {
    return (
        <div>
            <Skeleton height={60} width={60} className='JobOpeningsSkeleton_logo' />
            <Skeleton height={30} width={'95%'} className='JobOpeningsSkeleton_info' />
            <Skeleton width={'65%'}/>
        </div>
    )
}

export default JobOpeningsSkeleton
