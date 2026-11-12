## install projects tools (node + pnpm + java)

1.install mise once using shell:

- brew install mise

2. After clone the repo, run this inside Terminal:

- mise trust # needed the first time
- mise install # downloads Node 22, pnpm 11.25.0 and Java 21

## Command at the root What happens

- pnpm start | (Looks for a start script in the root package.json. There isn’t one, so it fails.)
- pnpm -r start | (Runs start in every app at once: 2 Expo apps and 2 Next.js apps fighting over one terminal.)
- pnpm --filter kalee start | (Runs only Kalee or any apps by name in the root)
