import { useEffect, useState } from "react"
import { Header } from ".."

import styles from './headerBuilder.module.scss'

interface HeaderBuilder {
    HeaderBuilderProps: ({}) => void
}

export function HeaderBuilder({HeaderBuilderProps}: HeaderBuilder) {
    const [logoSizeValue, setLogoSizeValue] = useState(100)
    const [iconSizeValue, setIconSizeValue] = useState(25)
    const [iconColorValue, setIconColorValue] = useState('')

    useEffect(() => {
    //   console.log({logoSizeValue, iconSizeValue, iconColorValue})
      HeaderBuilderProps({logoSizeValue, iconSizeValue, iconColorValue})
    }, [logoSizeValue, iconSizeValue, iconColorValue])

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
                        value={logoSizeValue}
                        onChange={(e) => setLogoSizeValue(Number(e.target.value))} 
                    />
                    <label htmlFor="icons-size">Icons Size:</label>
                    <input 
                        type="range" 
                        id="icons-size" 
                        name="icons-size"
                        min="20" max="50"
                        value={iconSizeValue}
                        onChange={(e) => setIconSizeValue(Number(e.target.value))} 
                    />
                    <label htmlFor="icons-color">Icons Color:</label>
                    <input 
                        type="color" 
                        id="icons-color" 
                        name="icons-color"
                        value={iconColorValue}
                        onChange={(e) => setIconColorValue(e.target.value)} 
                    />
                </form>
            </section>
        </>
    )
}