import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export const Portal: React.FC<any> = ({children, selector}) => {
    const [mounted, setMounted] = useState(false)
    useEffect(()=> {
        setMounted(true)
        return ()=>setMounted(false)
    }, [selector])


    return mounted ? createPortal(children, document.querySelector(selector)):null    
}

export default Portal