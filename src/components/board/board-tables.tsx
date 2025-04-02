import React, { ReactNode } from 'react'

type Props = {
    flex: string,
    content: ReactNode
}

export default function Table({flex, content}: Props) {
  return (
    <div className={`flex h-full ${flex} p-10`}>
        {content}
    </div>
  )
}