import './globals.scss'

import { Providers } from './providers';

export const metadata = {
  title: 'Carbon Tutorial Next 13 App',
  description: 'NextJS 13 app with IBM Carbon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
