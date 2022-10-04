import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { rules } from '@/constants'
import styles  from './dropdown.module.css'


export interface IDropdownProps {
  open: boolean
  onToggle: (state: boolean) => void
}



export const Dropdown: React.FC<IDropdownProps> = ({ open, onToggle }) => {
  const listRef = useRef<any>(null)

  useEffect(() => {
    const onClick = (e: any) => {
      if (!listRef.current.contains(e.target) && !e.target.getAttribute("data-dropdown")) {
        onToggle(false)
      }
    }

    document.addEventListener('mouseover', onClick)
    document.addEventListener('click', onClick)
    
    return () => {
      document.removeEventListener('mouseover', onClick)
      document.removeEventListener('click', onClick)
    }
  }, [open, listRef])
  
  return (
    <div ref={listRef} className={styles.dropdown}>
      {rules.map((e)=> (
        <div key={e.category} >
          <p>{e.category}</p>
          <ul>
            {e.servers.map((e)=> (
              <Link key={e.name} href={e.link}>
                <li>{e.name}</li>
              </Link>
            ) )}
          </ul>
        </div>
      ))
      }
    </div>
  )
}

export default Dropdown
