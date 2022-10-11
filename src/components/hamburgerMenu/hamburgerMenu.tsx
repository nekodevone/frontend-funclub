import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { rules } from '@/constants'
import styles from './hamburgerMenu.module.css'
import HamburgerSVG from '../svg/hamburgerSVG'
import { animated } from 'react-spring'
import { useTransition } from 'react-spring'

export interface IHamburgerMenu {
    openObject: boolean
    setOpenObject: (state: boolean) => void
    style: object
}

export const HamburgerMenu: React.FC<IHamburgerMenu> = ({ openObject, setOpenObject, style }) => {
    const [hamburgerList, setHamburgerList] = useState<boolean>(false)

    const hamburgerListAnimate = useTransition(hamburgerList, {
        from: {
            opacity: 0,
        },
        enter: {
            y: 0,
            opacity: 1,
        },
        leave: {
            y: 200,
            opacity: 0,
        },
    })

    return (
        <animated.div className={styles.burger__module} style={style}>
            <div>
                <HamburgerSVG openObject={openObject} setOpenObject={setOpenObject} />
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
                {hamburgerListAnimate((style, hamburgerList) =>
                    hamburgerList && (
                        <animated.div className={styles.burger_list} style={style}>
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
                        </animated.div >
                    )
                )}
            </ul>
        </animated.div >
    )
}

export default HamburgerMenu
