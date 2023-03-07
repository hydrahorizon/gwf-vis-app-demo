# GWF Vis App Demo

This is a minimal demo of creating a GWF vis app.

## File Structure

- `index.html` is the entry point of the project.
- `gwf-vis-host.js` is the library to be imported by `index.html`. After imported, a `<gwf-vis-host>` HTML tag can be used and it will accept a property `config`.
- `config.json` is a demo config file that is fetched by a script from `index.html` and loaded into the `gwf-vis-host` element.
- `plugins/` is a directory that contians demo plugins.
  - `data-fetcher.plugin.js` is a demo plugin that fetch and display the data from the data provider.
  - `data-provider.plugin.js` is a demo plugin that registered as a data provider. When the data is queried, it mocks some waiting time and returns an array of number.
  - `shared-state.plugin.js` is a demo plugin that has a shared value across plugins. When the shared value is updated, all the instances of this plugin would be updated with the new value.
  - `tile-layer.plugin.js` is a demo plugin that adds a map layer into the vis. It also shows how the props from the config file is passed in and used.

## How to Start

Just host the project directory using any HTTP server as a static site and then access it using the browser.

If changes of the code are not applied after refreshing the page, disabling the cache in the HTTP server config might be helpful. For example, if NPM `http-server` is used as the dev server, add `-c-1` to set the cache time to -1 second.

```sh
npx http-server -c-1
```
