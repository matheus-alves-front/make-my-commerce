import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Header } from '../src/components/Header'
import { HeaderBuilder } from '../src/components/Header/builder/HeaderBuilder'
import { HeaderBuilderContext } from '../src/contexts/HeaderBuilderContext'

import '../styles/globals.css'

interface HeaderBuilderData {
  logoSizeValue: number
  iconSizeValue: number
  iconColorValue: string
}

function MyApp({ Component, pageProps }: AppProps) {
  const [logoSizeValue, setLogoSizeValue] = useState(100)
  const [iconSizeValue, setIconSizeValue] = useState(50)
  const [iconColorValue, setIconColorValue] = useState('#FFFFFF')

  function handleHeaderStyles({
    logoSizeValue, 
    iconSizeValue,
    iconColorValue
  }: HeaderBuilderData) {
    console.log({logoSizeValue, iconSizeValue, iconColorValue})
    setLogoSizeValue(logoSizeValue)
    setIconSizeValue(iconSizeValue)
    setIconColorValue(iconColorValue)
  }

  return (
    <>
      <HeaderBuilderContext.Provider 
        value={{
          logoSizeValue,
          iconSizeValue,
          iconColorValue,
          SubmitEvent: handleHeaderStyles
        }}
      >
        <Header 
            logo_size={logoSizeValue} 
            icon_size={iconSizeValue} 
            icon_color={iconColorValue} 
        />

        <HeaderBuilder HeaderBuilderProps={handleHeaderStyles} />
      </HeaderBuilderContext.Provider>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
