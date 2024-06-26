import Header from '@/components/Layout/Header'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Layout/Footer'
import '@/app/globals.css'
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider'
import Toast from '@/components/Toast/Toast'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'FullStack Next Sanity App',
  description: 'Boilerplate App with Next, Sanity, Tailwind including Auth',
}

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className='font-normal'>
              <div className='absolute w-full top-0 z-50'>
                <Header />
              </div>
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
