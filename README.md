# msn-backup-viewer

> Tool to format and easily read backup/export files from good the old Microsoft MSN Messenger 👴.

You are browsing through some old personal backup archives and stumble upon an _"msn"_ or _"msn chats"_ folder... your mind recall things about wonderful times and people of when the Internet and social networks were still a fun place... you think _"OMG that happened more or less 15 years ago! I was such a different person..."_.

Now you are curious to read that old messages and have fun of your younger self but then when you open the folder you find a bunch of `.xml` files, it's not difficult to open them, but between all those tags and data is difficult to properley read the messages text... and this is exactly what this tool is about!

Just copy & paste the XML content in this tool and have your old chat readable again in modern chat UI!

## Built with

- [Qwik](https://qwik.dev/) - _server-first JS framework_
- [Typescript]() - _Javascript with types_
- [Tailwind.css]() + [Daisy UI]() - _CSS as utility classes and UI components_
- [Firebase](https://firebase.google.com/) - _hosting for private conversations files_
- [Vercel](https://vercel.com/) - _app deploy_

## Can I use this (simple) app?

Sure, it is public with no authentication and no tracking, just paste your MSN `.xml` conversations as text in the box and click the button to see them converted in a beatiful and modern chat UI.

There is **private** section protected with a password that is only for me so that I can check my MSN backups easier without the need to access my `.xml` backups.

## License

Code under [MIT](LICENSE), MSN messenger logo is property of Microsoft.

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `npm run build.server` and `npm run build.client`:

```shell
npm run build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
npm run deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
