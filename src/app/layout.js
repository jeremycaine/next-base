import './globals.scss'
import { Inter } from 'next/font/google'

import Content from '@/components/Content/Content';
import Theme from '@/components/Theme/Theme';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          {children}
        </Content>
      </body>
    </html>
  )
}
