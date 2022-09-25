import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { rules } from '@/constants'

import styles from './burgerMenu.module.css'

export const BurgerMenu: React.FC<any> = ({setBurger }) => {
    const [burgerList, setBurgerList] = useState<boolean>(false)
    const burgerElemenet = useRef<any>(null)

    return (
        <div className={styles.burger__module} ref={burgerElemenet}>
            <div>
                <svg onClick={() => { setBurger(false) }} className={styles.burger__svg} xmlns="http://www.w3.org/2000/svg" width="30px" height="25px" viewBox="0 0 30 25" fill="pink"><defs></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect width="30" height="5" rx="2" /><rect y="10" width="30" height="5" rx="2" /><rect y="20" width="30" height="5" rx="2" /></g></g></svg>
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
                <li onClick={() => { burgerList ? setBurgerList(false) : setBurgerList(true) }}>
                    📄Правила
                </li>
                {burgerList && (
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

export default BurgerMenu
