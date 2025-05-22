import Image from 'next/image'
import React, { FC } from 'react'
import { Photo } from '../gallery/page'

interface PhotoCardProps {
    photo: Photo
}

const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
    return (
        <div
            key={photo.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
        >
            <div className="relative aspect-square">
                <Image
                    fill
                    src={photo.image}
                    className="object-cover"
                    alt={`Image of ${photo.title} by ${photo.photographer}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-6">
                <h1 className="text-xl font-semibold mb-2">{photo.title}</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {photo.description}
                </p>
            </div>
        </div>
    )
}

export default PhotoCard