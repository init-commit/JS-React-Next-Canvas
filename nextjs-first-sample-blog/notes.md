# Navigate Between Pages


### Client-Side Navigation
1. The Link component enables client-side navigation between two pages in the same Next.js app.

2. Client-side navigation means that the page transition happens using JavaScript,
which is faster than the default navigation done by the browser.



### Code splitting and prefetching

1. Next.js does code splitting automatically, so each page only loads what’s necessary for that page.
    That means when the homepage is rendered, the code for other pages
    is not served initially.
    This ensures that the homepage loads quickly even if you have
    hundreds of pages.

2. Only loading the code for the page you request also means that pages become isolated. 
If a certain page throws an error, the rest of the application would still work.

### Summary
Next.js automatically optimizes your application for the best performance by code splitting,
client-side navigation, and prefetching (in production).

You create routes as files under pages and use the built-in Link component.
No routing libraries are required.



# Assets, Metadata and, CSS

    Next.js can serve static assets, like images, under the top-level public directory.
    Files inside public can be referenced from the root of the application similar to pages.

    The public directory is also useful for robots.txt, Google Site Verification, and any
    other static assets. Check out the documentation for Static File Serving to learn more.


### Adding third party javascript
```js

<Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy="lazyOnload"
    onLoad={() =>
        console.log(`script loaded correctly, windowhas been populated`)
    }
    />
```

Added below the Head component. Notice the "H" and not "h".
This was just for demo purpose and has been removed and script tag commented out.


### CSS
CSS Modules are useful for component-level styles. But if you want some CSS
to be loaded by every page, Next.js has support for that as well.

    To load global CSS to your application, create a file called pages/_app.js
    The default export of _app.js is a top-level React component that wraps all the pages in your application.
    You can use this component to keep state when navigating between pages, or to add global styles as we're doing here
---
    In Next.js, you can add global CSS files by importing them from pages/_app.js.
    You cannot import global CSS anywhere else because global CSS affects all elements on the page.
