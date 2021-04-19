# Pixie Customer Docs

The documentation site for [Pixie](https://github.com/pixie-labs/pixie), hosted at [docs.pixielabs.ai](https://docs.pixielabs.ai).

Built with [Gatsby](https://www.gatsbyjs.com/).

For the main website code, see [`pixielabs-website`](https://github.com/pixie-labs/pixielabs-website).

## Contributing
We're excited to have you contribute to Pixie's documentation.
Our community has adopted the [Contributor Covenant](https://github.com/pixie-labs/pixie/blob/main/CODE_OF_CONDUCT.md) as its code of conduct, and we expect all participants to adhere to it.
Please report any violations to <community@pixielabs.ai>.
All code contributions require the [Contributor License Agreement](https://github.com/pixie-labs/pixie/blob/main/CLA.md).
The CLA can be signed when creating your first PR.

There are many other ways to contribute to Pixie, as well:

- **Bugs:** Something not working as expected? [Send a bug report](https://github.com/pixie-labs/pixie/issues/new?template=Bug_report.md).
- **Features:** Need new Pixie capabilities? [Send a feature request](https://github.com/pixie-labs/pixie/issues/new?template=Feature_request.md).
- **Views & Scripts Requests:** Need help building a live view or pxl scripts? [Send a live view request](https://github.com/pixie-labs/pixie/issues/new?template=Live_view_request.md).
- **PxL Scripts:** PxL scripts are used by Pixie's API to query telemetry data collected by the Pixie Platform (DNS events, HTTP events, etc) and to extend the platform to collect new data sources.
  PxL can be executed using the web based Live UI, CLI or API. Look [here](https://github.com/pixie-labs/pixie/blob/main/pxl_scripts/README.md#Contributing) for more information.
- **Pixienaut Community:** Interested in becoming a [Pixienaut](https://github.com/pixie-labs/pixie/tree/master/pixienauts) and in helping shape our community? [Apply here](https://pixielabs.ai/community/).
- **Community Slack:** Pixie users can also chat with one another in our [community Slack](https://pixie-community.slack.com).

## 🚀 Quickstart for contributors

To run in development mode, run the following commands:
```shell
yarn install
yarn start
```
Then visit `http://localhost:8000/` to view the app.

To generate a production build, run:
```shell
yarn install
yarn build
```

## Updating content
To pull updated content, run:
```shell
./update_docs.sh
```
This will overwrite `external/pxl_documentation.json`.
Add the changed file to the repo, and submit a pull request.

## Notes
- For nesting documents in the left sidebar, create a folder with the same name as the top level `.md` filename.
  Nested navigation is generated automatically, and is alphabetically ordered.
  At this time, only one level of nesting is supported.

## Live Code Editor

To render react components for live editing in Markdown content, add `react-live=true` after a code block's language specifier. For example:
````markdown
```javascript react-live=true
<button>Edit my text</button>
```
````
This is achieved using the [`react-live` package](https://www.npmjs.com/package/react-live).

## 🤖 SEO friendly

This is a static site and comes with all the SEO benefits thereof.
Using [MDX Frontmatter](https://www.gatsbyjs.com/docs/mdx/writing-pages/), you can set search-engine-friendly metadata for each page.

A basic page might set its title, as well as the title and description that search engines see, by placing this at the top of its file:
```markdown
---
title: "Title of the page"
metaTitle: "Meta Title Tag for this page"
metaDescription: "Meta Description Tag for this page"
---
```

Canonical URLs are generated automatically.
