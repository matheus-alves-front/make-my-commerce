import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Builders } from '../src/components/Builders'
import { Header } from '../src/components/Header'
import { HeaderBuilder } from '../src/components/Header/HeaderBuilder'
import { HeaderBuilderContext } from '../src/contexts/HeaderBuilderContext'

import '../styles/globals.css'

interface HeaderBuilderData {
  logoSize: number
  iconSize: number
  iconColor: string
  backgroundColor: string
}

function MyApp({ Component, pageProps }: AppProps) {
  const [logoSize, setLogoSize] = useState(100)
  const [iconSize, setIconSize] = useState(50)
  const [iconColor, setIconColor] = useState('#FFFFFF')
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')

  function handleHeaderStyles(
    logoSize: number, 
    iconSize: number,
    iconColor: string,
    backgroundColor: string
  ) {
      setLogoSize(logoSize)
      setIconSize(iconSize)
      setIconColor(iconColor)
      setBackgroundColor(backgroundColor)
  }

  const [isBuilderEnable, setIsBuilderEnable] = useState(true)

  function handleBuilderConfiguration(isBuilderEnable: boolean) {
    setIsBuilderEnable(isBuilderEnable)
  }

  return (
    <>
      <Builders isBuilderOn={handleBuilderConfiguration} />
      <Header 
          logo_size={logoSize} 
          icon_size={iconSize} 
          icon_color={iconColor}
          background_color={backgroundColor}

      />
      {isBuilderEnable ? <HeaderBuilder HeaderBuilderProps={handleHeaderStyles} /> : false}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
