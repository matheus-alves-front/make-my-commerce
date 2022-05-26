import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios'

import { 
    BsCartPlusFill,
    BsFillPersonFill,
    BsToggleOn, 
    BsToggleOff 
} from "react-icons/bs";
import styles from './header.module.scss'


interface HeaderProps {
    logo_size: number;
    icon_color: string;
    icon_size: number;
    background_color: string;
}

export function Header({
    logo_size,
    icon_size,
    icon_color,
    background_color
}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <header className={styles.Header} style={{backgroundColor: background_color}}>
            <div className={styles.content}>
                <button 
                    className={styles.toggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ?(
                        <BsToggleOn fontSize={icon_size} color={icon_color} />
                    ): (
                        <BsToggleOff fontSize={icon_size} color={icon_color} />
                    )}
                    <span style={{color: icon_color}}>Menu</span>
                </button>
                <Link className={styles.logo} href={'/about'} >
                    <img 
                        className={styles.logo}
                        width={logo_size}
                        src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png" 
                        alt="Logo" 
                    />
                </Link>
                <span className={styles.profile}>
                    <BsFillPersonFill fontSize={icon_size} color={icon_color}/>
                </span>
                <span className={styles.cart}>
                    <BsCartPlusFill fontSize={icon_size} color={icon_color}/>
                </span>
            </div>
        </header>
    )
}



// Configurable API Header:
// ----------------
// tamanho logotipo
// cor dos ícones
// tamanho dos icones
// 
//
//