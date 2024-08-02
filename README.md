# recursive filetree
an example of how to use a recursive react component to render a treenode data structure of arbitrary depth.

recursion works great for any sort of tree-like data structure something like a file system with directories and files. even the react tree follows this pattern. recursion is pretty cool because it works with lower function calls.

we render a separate instance folder for each folder in our data structure, and so we have all these instances of the folder component just by the nature of recursion, and this usually falls out of the design of your code when you use recursion.

check out this sweet <a href="https://recursive-filetree.vercel.app/">demo</a>.


this is a [next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## getting Started

first, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

you can start editing the page by modifying `app/page.tsx`. the page auto-updates as you edit the file.

this project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom google font.

## learn more

to learn more about next.js, take a look at the following resources:

- [next.js documentation](https://nextjs.org/docs) - learn about next.js features and API.
- [learn next.js](https://nextjs.org/learn) - an interactive next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
