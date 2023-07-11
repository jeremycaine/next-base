# next-base
Base NextJS 13 app using IBM Carbon Design System React components

# 0.0.0 - setup

## Create NextJS 13 app
```bash
yarn create next-app

✔ What is your project named? … next-base
✔ Would you like to use TypeScript? … *No / Yes
✔ Would you like to use ESLint? … No / *Yes
✔ Would you like to use Tailwind CSS? … *No / Yes
✔ Would you like to use `src/` directory? … No / *Yes
✔ Would you like to use App Router? (recommended) … No / *Yes
✔ Would you like to customize the default import alias? … *No / Yes

cd carbon-tutorial-next
yarn dev
```
Configure paths in `jsconfig.json`
```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/components/*": ["components/*"],
      "@/app/*": ["app/*"]
   }
  }
}
```

## Updated NextJS Bootstrap
We need to modify some of the boostrap code in order to support the Carbon components.

In `app/layout.js` take out:
```
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```
and take out className tag from <body>.

## Install Carbon
```bash
yarn add @carbon/react@1.33.0
```

## Styling SaaS
Change `global.css` and `page.module.css` to `.scss` and imports in `page.js` and `layout.js.`
```bash
yarn add sass@.63.6
yarn dev
```

In NextJS 13 the `globals.scss` is imported to the Root Layout `app/layout.js`. From React `src/index.scss` overwrite contents in `app/global.scss`

### Stylesheet strategy
Root Layout `layout.js` imports `./global.scss` which uses `./{page-name}.scss`. These file names need to be unique.

The app structure is not using CSS Modules and requires that the CSS definitions do not clash e.g. `.landing-page__banner` and `.repo-page__banner`.

## Wrapping React Components
Components used by Next 13 need the `use client` and simplest way to reuses is to create wrapper components. Create `src/components/Button.js` as an example.
```
'use client';
 
import { Button } from '@carbon/react';
 
export default Button;
```
Example put a button on LandingPage `src/page.js`
```
import styles from './page.module.scss'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div>
      Landing Page
      <Button>Button</Button>
    </div>
  )
}
```

# 0.0.1 - Step 1

## Add UI Shell
Install icons
```bash
yarn add @carbon/icons-react
```
Add a wrapper componet for `@carbon/react/Content`

Create `component/TutorialHeader/TutorialHeader.js` from Step 1 React and adapt
```
'use client'

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import {
  Switcher,
  Notification,
  UserAvatar,
} from '@carbon/icons-react';

import Link from 'next/link';

const TutorialHeader = () => (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="IBM">
              Carbon Tutorial
            </HeaderName>
          </Link>     
           <HeaderNavigation aria-label="Carbon Tutorial">
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem >
                  Repositories
                </HeaderMenuItem>
              </Link>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}>
              <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/repos" passHref legacyBehavior>
                  <HeaderMenuItem >
                    Repositories
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="center">
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center">
                <UserAvatar size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
      )}
    />
);

export default TutorialHeader;
```

## Page Layout
Now for the Step 1 Create Pages.

`./app/page.js` will be the Home Page and pull in the LandingPage we create in its `home` folder.
```
- /app
  - page.js (Home Page)
  - layout.js (Root Layout)
  - /home
    - page.js (Landing Page)
    - _landing-page.scss
    - _mixins.scss
    - _overrides.scss
  - /repo
    - page.js (Repo Page)
    - _repo-page.scss
```

The Home Page will pull in the Root Layout which calls a Providers components. The Providers component will be a `use client` Client component that can layout the shell components e.g. Carbon `Content`, `Theme` and `TutorialHeader`.

Root Layout
```
import './globals.scss'

import { Providers } from './providers';

export const metadata = {
  title: 'Carbon Next 13 App',
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
```
Providers
```
'use client'

import Content from '@/components/Content/Content';
import Theme from '@/components/Theme/Theme';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          {children}
        </Content>
    </div>
  )
}
```

# 0.0.2 - Step 2

## Wrapper Components
Breadcrumb, 
BreadcrumbItem, 
Grid, 
Column
Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,


update landing page
```
Warning: Content: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
```
## Style landing page
override in case carbon changes

spacing
```
@use '@carbon/react/scss/spacing' as *;
@use '@carbon/react/scss/type' as *;
@use '@carbon/react/scss/breakpoint' as *;
@use '@carbon/react/scss/theme' as *;
```

# 0.0.3 - Step 3


