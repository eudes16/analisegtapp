import Link from 'next/link'
import { FC } from 'react'

interface MenuItemProps {
    title: string
    href: string
    active: boolean
    icon: any
    className?: string
}

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <Link 
        className={`
            flex items-center gap-2 p-4 rounded-lg
            ${props.className ?? ''}
        `}
        href={props.href}
    >
      
    </Link>
  )
}

export default MenuItem