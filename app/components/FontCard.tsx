import React, { FC } from 'react'
import { fontMap } from '../fonts/fontMap'

export interface FontData {
    name: string
    text: string
    className: string,
}

const FontCard: FC<FontData> = ({ name, text }) => {
    const selectFont = fontMap[name]
    return (
        <div
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
            <div className={`text-2xl mb-4 ${selectFont.className}`}>
                {text}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
                {name}
            </div>
        </div>
    )
}

export default FontCard