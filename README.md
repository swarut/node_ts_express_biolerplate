A simple boilerplate for Express with Typescript. This setup is based on Microsoft's starter pack with some tweaks.

# Set up and Start
- `npm install`
- `npm run build`
- `npm start`
You can also use `npm run watch` to automatically detect the changes and recompile.
To copy the assets (not automatically done by watch), run `npm run build-assets`.

# Running in different environment
To run the project based on the environment, follow these steps:
1. Create the config file in `config` folder, named it as `<env_name>.env`.
2. When you run the app, supply the environment name to `NODE_ENV` for instance `NODE_ENV=development npm run watch`
