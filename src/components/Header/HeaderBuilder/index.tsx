import { useEffect, useState } from "react"

import styles from './headerBuilder.module.scss'

interface HeaderBuilder {
    HeaderBuilderProps: (
        logoSize: number,
        iconSize: number,
        iconColor: string,
    ) => void
}

export function HeaderBuilder({HeaderBuilderProps}: HeaderBuilder) {
    const [logoSize, setLogoSize] = useState(100)
    const [iconSize, setIconSize] = useState(25)
    const [iconColor, setIconColor] = useState('')

    useEffect(() => {
    //   console.log({logoSize, iconSize, iconColor})
      HeaderBuilderProps(logoSize, iconSize, iconColor)
    }, [logoSize, iconSize, iconColor])
    
    return (
        <>
            <section className={styles.HeaderBuilder}>
                <form action="" method="post">
                    <label htmlFor="logo-size">Logo Size:</label>
                    <input 
                        type="range" 
                        id="logo-size" 
                        name="logo-size"
                        min="100" max="200"
                        value={logoSize}
                        onChange={(e) => setLogoSize(Number(e.target.value))} 
                    />
                    <label htmlFor="icons-size">Icons Size:</label>
                    <input 
                        type="range" 
                        id="icons-size" 
                        name="icons-size"
                        min="20" max="50"
                        value={iconSize}
                        onChange={(e) => setIconSize(Number(e.target.value))} 
                    />
                    <label htmlFor="icons-color">Icons Color:</label>
                    <input 
                        type="color" 
                        id="icons-color" 
                        name="icons-color"
                        value={iconColor}
                        onChange={(e) => setIconColor(e.target.value)} 
                    />
                </form>
            </section>
        </>
    )
}