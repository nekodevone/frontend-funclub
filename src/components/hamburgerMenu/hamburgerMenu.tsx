import Link from 'next/link'
import React, { useState } from 'react'
import { rules } from '@/constants'
import styles from './hamburgerMenu.module.css'
import HamburgerSVG from '../svg/hamburgerSVG'
export interface IHamburgerMenu {
    openObject: boolean
    setOpenObject: (state: boolean) => void
}

export const HamburgerMenu: React.FC<IHamburgerMenu> = ({openObject, setOpenObject}) => {
    const [hamburgerList, setHamburgerList] = useState<boolean>(false)
    
    return (
        <div className={styles.burger__module}>
            <div>
                <HamburgerSVG openObject={openObject} setOpenObject={setOpenObject}/>
            </div>
            <ul className={styles.burger__menu}>
                <Link href="/donate">
                    <li>
                        <a>💰 Донаты</a>
                    </li>
                </Link>
                <Link href="https://station13.ru/">
                    <li>
                        <a>🚀 SS13</a>
                    </li>
                </Link>
                <Link href="https://hardrp.wordpress.com/">
                    <li>
                        <a>🐸 Hard RP</a>
                    </li>
                </Link>
                <Link href="https://funclubfrp.wordpress.com/">
                    <li>
                        <a> 💀 Full RP</a>
                    </li>
                </Link>
                <li onClick={() => { hamburgerList ? setHamburgerList(false) : setHamburgerList(true) }}>
                    📄Правила
                </li>
                {hamburgerList && (
                    <div className={styles.burger_list}>
                        {rules.map((e) =>
                            <div key={e.category}>
                                <p>{e.category}</p>
                                <ul>
                                    {e.servers.map((e) =>
                                        <Link key={e.name} href={e.link}>
                                            <li>{e.name}</li>
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div >
                )}
            </ul>
        </div >
    )
}

export default HamburgerMenu
