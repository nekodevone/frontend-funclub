import styles from './hamburgerSVG.module.css'

export interface HamburgerSVGBlock {
    openObject: boolean
    setOpenObject: (state: boolean) => void
}

export const HamburgerSVG: React.FC<HamburgerSVGBlock> = ({openObject, setOpenObject}) => {
    
    return (
        <svg
            onClick={()=> openObject?setOpenObject(false):setOpenObject(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="25px"
            viewBox="0 0 30 25"
            fill={openObject?"pink":"white"}
            className={styles.svg}
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
    )
}

export default HamburgerSVG