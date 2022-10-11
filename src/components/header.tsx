import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { useTransition } from 'react-spring'
import Dropdown from '@/components/dropdown'
import styles from './header.module.css'
import HamburgerSVG from './svg/hamburgerSVG'
import Portal from './portal'
import HamburgerMenu from './hamburgerMenu/hamburgerMenu'
export interface IHeaderProps {
  className?: string
}

export const Header: React.FC<IHeaderProps> = ({ className }) => {
  const [hamburgerOpen, toggleHamburger] = useState<boolean>(false)
  const [dropdownOpen, toggleDropdown] = useState<boolean>(false)
  
  const dropdownAnimate = useTransition(dropdownOpen, {
    from: {
      x: -50,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
    },
    leave: {
      x: -50,
      opacity: 0,
    },
  })  
  const hamburgerAnimate = useTransition(hamburgerOpen, {
    from: {
      x: 200,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
    },
    leave: {
      x: 200,
      opacity: 0,
    },
  }) 
  return (
    <header className={clsx(styles.header, className)}>
      <Portal selector="#modal">
        {hamburgerAnimate((style, hamburgerOpen) => 
            hamburgerOpen && <HamburgerMenu style={style} openObject={hamburgerOpen} setOpenObject={toggleHamburger}/>
        )}
      </Portal>
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
              onClick={() => dropdownOpen?toggleDropdown(false):toggleDropdown(true)}
              data-dropdown
              onMouseOver={() => toggleDropdown(true)}
            >
              📄 Правила
            </p>  
            {dropdownAnimate((style, dropdownOpen) => 
                dropdownOpen && <Dropdown style={style} open={dropdownOpen} onToggle={toggleDropdown} />
            )}
          </li>
        </ul>
        {!hamburgerOpen && <HamburgerSVG openObject={hamburgerOpen} setOpenObject={toggleHamburger}/> }
      </nav>
    </header>
  )
}
