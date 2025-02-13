import React from 'react'

interface ChevronProps {
    color?: string;
    size?: number;
}

export const Chevron: React.FC<ChevronProps> = ({ color = 'currentColor', size = 24 }) => {
    return (
        <svg  
            xmlns="http://www.w3.org/2000/svg"  
            width={size}  
            height={size}  
            viewBox="0 0 24 24"  
            fill="none"  
            stroke={color}  
            strokeWidth="2"  
            strokeLinecap="round"  
            strokeLinejoin="round"  
            className="icon icon-tabler icons-tabler-outline icon-tabler-circle-chevron-right"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M11 9l3 3l-3 3" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" />
        </svg>
    )
}
