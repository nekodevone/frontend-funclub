import clsx from 'clsx'
import Link from 'next/link'
import classes from './header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.header__nav}>
        <Link className={classes.header__logo} href="/">
          FUNCLUB
        </Link>
        <ul className={classes['header__nav-links']}>
          <li>
            <Link className={clsx(classes.header__link, classes.header__link_shop)} href="/donate">
              💰 Донаты
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} href="https://station13.ru/">
              🚀 SS13/SS14
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} href="https://hrp.funclub.pro/">
              🐸 Hard RP
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} href="https://frp.funclub.pro/">
              ❄️ Full RP
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
