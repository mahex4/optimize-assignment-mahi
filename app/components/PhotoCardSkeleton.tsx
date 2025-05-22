import React from 'react'
import Skeleton from './Skeleton'

const PhotoCardSkeleton = () => {
  return (
    <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
    >
        <div className="relative aspect-square">
            <Skeleton />
        </div>
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-2">Photos Incoming</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                Loading your Photo
            </p>
        </div>
    </div>
  )
}

export default PhotoCardSkeleton