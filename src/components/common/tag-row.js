import React from 'react'
import { categoryColors } from './styles'


export default function TagRow({tags}) {
    return (
        <div className="tags-container">
            { tags.map((tag, ind) =>
            <span key={ind} className="tags" style={{backgroundColor: categoryColors[tags]}}>
                {tags.toUpperCase()}
            </span>
            )}
        </div>
    )

}