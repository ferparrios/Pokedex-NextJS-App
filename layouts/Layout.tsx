import Head from 'next/head'
import { Navbar } from '../ui'

interface LayoutProps{
  children: React.ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Pokemon App' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Fernando Paredes Rios' />
        <meta name='description' content='Información sobre el Pokémon XXXXX' />
        <meta name='keywords' content='XXXXX, Pokémon, Pokedex' />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>
    </>
  )
}
