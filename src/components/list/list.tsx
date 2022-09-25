import { rules } from "@/constants";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import styles from "./list.module.css"

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
                    <div key={e.id}>
                        <p>{e.ListRuls}</p>
                        <ul>
                            {e.server.map((e)=> 
                                <Link key={e.id} href={e.url}>
                                    <li>
                                        {e.ServerName}
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