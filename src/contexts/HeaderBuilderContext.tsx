import { createContext } from "react";

interface HeaderProps {
    logoSize: number;
    iconSize: number;
    iconColor: string;
    setLogoSize: (newLogoSize: number) => void,
    setIconSize: (newIconSize: number) => void,
    setColorSize: (newIconColor: string) => void,
}

const initialHeaderContext = {
    logoSize: 100,
    iconSize: 30,
    iconColor: '#000000',
    setLogoSize: () => {},
    setIconSize: () => {},
    setColorSize: () => {},
}

export const HeaderBuilderContext = createContext<HeaderProps>(initialHeaderContext)


