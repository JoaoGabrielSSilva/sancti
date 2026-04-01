import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    text: string
}

const REFERENCE_REGEX = /\[(.*?)\]/g

export const ReferenceParser: React.FC<Props> = ({ text }) => {
    const parts = text.split(REFERENCE_REGEX)

    return (
        <p className="text-gray-700 leading-relaxed">
            {parts.map((part, index) => {
                if (index % 2 === 1) {
                    const ref = part.trim()

                    if(ref.includes(':')) {
                        return (
                            <Link key={index} to={`/bible?ref=${encodeURIComponent(ref)}`} className="text-blue-600 hover:underline font-semibold cursor-pointer" >
                                {ref}
                            </Link>
                        )
                    } else if (ref.startsWith('CIC')) {
                        const number = ref.replace('CIC', '').trim()
                        return (
                            <Link key={index} to={`/catechism?section=${number}`} className="text-amber-600 hover:underline font-semibold cursor-pointer" >
                                {ref}
                            </Link>
                        )
                    }
                    }
                return <span key={index}>{part}</span>
                }
            )}
            
        </p>
    )
}
 
