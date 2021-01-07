import React from 'react'
import './EventSkeleton.css'
import Skeleton from 'react-loading-skeleton';

function EventSkeleton() {
    return (
        <div>
            <Skeleton height={70} className='Eventskeleton__banner' />
            <Skeleton height={60} width={60} className='Eventskeleton__logoImg' />
            <Skeleton height={35} width={'90%'} className='Eventskeleton__bottom'/>
            <Skeleton height={22} width={'70%'} className='Eventskeleton__middleBottom'/>
            <Skeleton width={'40%'} className='Eventskeleton__bottom'/>
        </div>
    )
}

export default EventSkeleton
