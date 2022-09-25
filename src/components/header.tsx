import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import Dropdown from '@/components/dropdown'

import BurgerMenu from './burgerMenu/burgerMenu'
import styles from './header.module.css'

export interface IHeaderProps {
  className?: string
}

export const Header: React.FC<IHeaderProps> = ({ className }) => {
  const [hamburgerOpen, toggleHamburger] = useState<boolean>(false)
  const [dropdownOpen, toggleDropdown] = useState<boolean>(false)

  return (
    <header className={clsx(styles.header, className)}>
      {hamburgerOpen && (
        <BurgerMenu burger={hamburgerOpen} setBurger={toggleHamburger} />
      )}
      <nav className={styles.header__nav}>
        <Link href="/">
          <a className={styles.header__logo}>FUNCLUB</a>
        </Link>
        <ul className={styles['header__nav-links']}>
          <li>
            <Link href="/donate">
              <a
                className={clsx(styles.header__link, styles.header__link_shop)}
              >
                💰 Донаты
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://station13.ru/">
              <a className={styles.header__link}>🚀 SS13</a>
            </Link>
          </li>
          <li>
            <Link href="https://hardrp.wordpress.com/">
              <a className={styles.header__link}>🐸 Hard RP</a>
            </Link>
          </li>
          <li>
            <Link href="https://funclubfrp.wordpress.com/">
              <a className={styles.header__link}> 💀 Full RP</a>
            </Link>
          </li>
          <li>
            <p
              className={styles.header__link}
              onClick={() => toggleDropdown(true)}
            >
              📄 Правила
            </p>
            <Dropdown open={dropdownOpen} onToggle={toggleDropdown} />
          </li>
        </ul>
        {!hamburgerOpen && (
          <svg
            onClick={() => {
              toggleHamburger(true)
            }}
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="25px"
            viewBox="0 0 30 25"
            fill="white"
          >
            <defs></defs>
            <g id="Слой_2" data-name="Слой 2">
              <g id="Слой_1-2" data-name="Слой 1">
                <rect width="30" height="5" rx="2" />
                <rect y="10" width="30" height="5" rx="2" />
                <rect y="20" width="30" height="5" rx="2" />
              </g>
            </g>
          </svg>
        )}
      </nav>
    </header>
  )
}
