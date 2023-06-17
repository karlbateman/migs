# Migs

> An example which showcases how to integrate NextJS with any CMS that provides a content API.

## Introduction

Integrating a NextJS application with a headless CMS can be a challenge due to the flexibility NextJS provides for
consuming external data sources.

This example provides a best-practice approach to integrating with a headless CMS using the SSG (static site
generation) technique. Retrieving data from a content management system at build time, ensures your project remains
snappy when deployed, providing a better experience for your users.

There are two primary components to using NextJS static-site generation with a headless CMS, these are described as
follows:

1. Your pages should contain a unique URL `path` value in the CMS.
2. Within NextJS you enumerate over all paths specified in your CMS to generate the routes and respective pages.

This approach is demonstrated in the `src/lib/cms.ts` file, which is responsible for retrieving the CMS data. The
`src/app/cms/[[...slug]]/page.tsx` file is responsible for generating the pages for each route returned whilst enumerating all path values.

## Copyright

Copyright © 2023 Karl Bateman. All Rights Reserved.
