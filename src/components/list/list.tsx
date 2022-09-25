import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { rules } from '@/constants'

import styles from './list.module.css'

export const List: React.FC= () => {
    const listElemenet = useRef<any>(null)
    const [list, setList] = useState<boolean>(false)
    const click = (e: MouseEvent ) => {
        if (list && !listElemenet.current.contains(e.target)) setList(false)
    }
    useEffect(() => {
        document.addEventListener("click", click);
        return () => {
            document.removeEventListener("click", click);
        };
    }, [list, listElemenet]);

    return (
        <li ref={listElemenet}>
            <p className={styles.header__link} onClick={() => setList(!list)}>📄 Правила</p>
            {list && <div className={styles.list}>
                {rules.map((e) =>
                    <div key={e.category}>
                        <p>{e.category}</p>
                        <ul>
                            {e.servers.map((e)=>
                                <Link key={e.name} href={e.link}>
                                    <li>
                                        {e.name}
                                    </li>
                                </Link>
                            )}
                        </ul>
                    </div>
                )}
            </div >}
        </li>
    )
}

export default List
