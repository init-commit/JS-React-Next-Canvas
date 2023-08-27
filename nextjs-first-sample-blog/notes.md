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