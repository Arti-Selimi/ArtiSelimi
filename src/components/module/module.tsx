import React from 'react'

type Props = {
    link: string
}

export default function Module({link}: Props) {
  return (
    <div>
        <iframe src={link} />
    </div>
  )
}