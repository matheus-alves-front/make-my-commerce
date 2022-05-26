import { Switch } from "@headlessui/react"
import { useEffect, useState } from "react"
import { BsToggleOff, BsToggleOn } from "react-icons/bs"

import styles from './builder.module.scss'

interface BuildersProps {
    isBuilderOn: (
        isBuilderEnable: boolean
    ) => void
}

export function Builders({isBuilderOn}: BuildersProps) {
    const [isBuilderEnable, setIsBuilderEnable] = useState(false)

        
    useEffect(() => {
        isBuilderOn(isBuilderEnable)
        console.log(isBuilderEnable)
    }, [isBuilderEnable])

    return (
        <section className={styles.Container}>
            <div className={styles.Content}>
                <button 
                    className={styles.builderEnable}
                    onClick={() => setIsBuilderEnable(!isBuilderEnable)}
                >
                    {isBuilderEnable ?(
                        <BsToggleOn fontSize={20} color={'#FFFFFF'} />
                    ): (
                        <BsToggleOff fontSize={20} color={'#FFFFFF'} />
                    )}
                    Builder Enable
                </button>
            </div>
        </section>
    )
}