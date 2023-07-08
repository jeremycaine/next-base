# next-base
Base NextJS 13 app using IBM Carbon Design System React components

# Create NextJS 13 app
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
      "@/components/*": ["components/*"]
    }
  }
}
```

# Styling SaaS
Change `global.css` and `page.module.css` to `.scss` and imports in `page.js` and `layout.js.`
```bash
yarn add sass@.63.6
yarn dev
```

In NextJS 13 the `globals.scss` is imported to the Root Layout `app/layout.js`. From React `src/index.scss` overwrite contents in `app/global.scss`

# Install Carbon
```bash
yarn add @carbon/react@1.33.0
```

# Wrapping React Components
Components used by Next 13 need the `use client` and simplest way to reuses is to create wrapper components. Create `src/components/Button.js` as an example.
```bash
'use client';
 
import { Button } from '@carbon/react';
 
export default Button;
```
Put a button on LandingPage `src/page.js`
```bash
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

# Add UI Shell
Install icons
```bash
yarn add @carbon/icons-react
```
add a wrapper componet for `@carbon/react/Content`

create `component/TutorialHeader/TutorialHeader.js` from Step 1 React and adapt
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
  <div>
    Tutorial Header

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
  </div>
);

export default TutorialHeader;
```



