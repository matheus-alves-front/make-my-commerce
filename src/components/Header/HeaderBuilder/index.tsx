import axios from "axios"
import { FormEvent, useEffect, useState } from "react"

import styles from './headerBuilder.module.scss'

interface HeaderBuilder {
    HeaderBuilderProps: (
        logoSize: number,
        iconSize: number,
        iconColor: string,
        backgroundColor: string,
    ) => void
}

export function HeaderBuilder({HeaderBuilderProps}: HeaderBuilder) {
    const [logoSize, setLogoSize] = useState(100)
    const [iconSize, setIconSize] = useState(25)
    const [iconColor, setIconColor] = useState('#000000')
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')

    
    useEffect(() => { 
      HeaderBuilderProps(logoSize, iconSize, iconColor, backgroundColor)
    }, [logoSize, iconSize, iconColor, backgroundColor])

    function handleApiHeaderBuilder(event: FormEvent) {
        event.preventDefault()

        axios.put('/api/CommerceBuilder/header', {
            logo_size: logoSize,
            icon_size: iconSize,
            icon_color: iconColor
        })
    }

    
    
    return (
        <>
            <section className={styles.HeaderBuilder}>
                <form onSubmit={handleApiHeaderBuilder} action="submit" method="post">
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
                    <label htmlFor="icons-color">Background Color:</label>
                    <input 
                        type="color" 
                        id="background-header-color" 
                        name="background-header-color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)} 
                    />
                    <button type="submit">Configurar</button>
                </form>
            </section>
        </>
    )
}