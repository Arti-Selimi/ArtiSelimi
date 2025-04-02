import React, { ReactNode } from 'react'

type Props = {
    className?: string
    content: ReactNode
}

export default function Tile({className, content}: Props) {
  return (
    <div className={`p-5 rounded-[15px] bg-white  shadow-xl ${className}`}>
        {content}
    </div>
  )
}