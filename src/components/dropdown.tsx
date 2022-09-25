import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { rules } from '@/constants'

import styles from './dropdown.module.css'

export interface IDropdownProps {
  open: boolean
  onToggle: (state: boolean) => void
}

export const Dropdown: React.FC<IDropdownProps> = ({ open, onToggle }) => {
  const listRef = useRef<any>(null)

  useEffect(() => {
    if (!open) {
      return
    }

    const onClick = (e: MouseEvent) => {
      if (!listRef.current.contains(e.target)) {
        onToggle(false)
      }
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [open, listRef])

  return (
    <span ref={listRef}>
      <span className={clsx(styles.dropdown, open && styles.dropdown_open)}>
        {rules.map((e) => (
          <span key={e.category}>
            <span>{e.category}</span>
            <span>
              {e.servers.map((e) => (
                <Link key={e.name} href={e.link}>
                  <span>{e.name}</span>
                </Link>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  )
}

export default Dropdown
