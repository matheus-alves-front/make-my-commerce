import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Header } from '../src/components/Header'
import { HeaderBuilder } from '../src/components/Header/HeaderBuilder'
import { HeaderBuilderContext } from '../src/contexts/HeaderBuilderContext'

import '../styles/globals.css'

interface HeaderBuilderData {
  logoSize: number
  iconSize: number
  iconColor: string
}

function MyApp({ Component, pageProps }: AppProps) {
  const [logoSize, setLogoSize] = useState(100)
  const [iconSize, setIconSize] = useState(50)
  const [iconColor, setIconColor] = useState('#FFFFFF')

  function handleHeaderStyles(
    logoSize: number, 
    iconSize: number,
    iconColor: string
    ) {
    console.log({logoSize, iconSize, iconColor})
    setLogoSize(logoSize)
    setIconSize(iconSize)
    setIconColor(iconColor)
  }

  return (
    <>
      <HeaderBuilderContext.Provider 
        value={{
          logoSize,
          iconSize,
          iconColor,
          SubmitEvent: handleHeaderStyles
        }}
      >
        <Header 
            logo_size={logoSize} 
            icon_size={iconSize} 
            icon_color={iconColor} 
        />

        <HeaderBuilder HeaderBuilderProps={handleHeaderStyles} />
      </HeaderBuilderContext.Provider>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
