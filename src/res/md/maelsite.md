##### Background

I needed a portfolio website. Also I like the idea of writing about my personal projects and blogging. If you don't write it down, it gets away and may very well have never existed.

##### Solution

This website is written in Rust and Typescript with React. It is served with [Tuono](https://tuono.dev). My domain name is through Cloudflare, and the server is hosted on AWS.

Originally I just wanted to serve static HTML. I decided I didn't want to mess with CSS until I had an MVP in HTML, which was... a mistake. My HTML, which included Bootstrap, became incredibly bloated and unmaintainable. I only realized in writing this website that React components are not necessary for maintenance of static HTML; that's what the CSS and `class='foo'` are for. Now I have React components and that's fine.

Other cool thing: This webpage, as well as all other subpages of `/professional` and `/personal`, are generated HTML. I just wrote this in markdown plus a handler for server-side rendering.
