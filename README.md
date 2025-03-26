# Docusaurus Documentation Guide
Overview
Docusaurus is a modern static website generator optimized for creating documentation websites. It provides out-of-the-box documentation features while being easy to maintain.

Prerequisites
Node.js version 16.14 or above

npm or yarn package manager

Quick Start
Installation
# Create a new Docusaurus site
npx create-docusaurus@latest my-documentation classic

# Navigate to your new site
cd 4workout

# Start the development server
yarn start

Project Structure
4workout/
├── blog/
│   ├── authors.yml
│   └── welcome.md
├── docs/
│   └── intro.md
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
│   └── img/
├── docusaurus.config.js
├── sidebar.js
└── package.json


Configuration
Basic Configuration
Edit docusaurus.config.js to configure your site:

module.exports = {
  title: 'Your Site Title',
  tagline: 'Your site description',
  url: 'https://your-domain.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'your-project',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

Sidebar Configuration
Configure your documentation sidebar in sidebars.js:

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'installation'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guide1', 'guide2'],
    },
  ],
};

Copy

Insert at cursor
javascript
Adding Content
Documentation
Add .md or .mdx files in the docs directory:

---
id: my-doc
title: My Document
sidebar_label: My Doc
---

## Hello World

This is my **first document**!


Blog Posts
Add blog posts in the blog directory:

---
slug: my-blog-post
title: My Blog Post
authors: [author1]
tags: [tag1, tag2]
---

Write your blog content here.


Customization
Styling
Add custom CSS in src/css/custom.css:

:root {
  --ifm-color-primary: #25c2a0;
  --ifm-code-font-size: 95%;
}


Custom Pages
Create custom React pages in src/pages:

import React from 'react';
import Layout from '@theme/Layout';

function MyPage() {
  return (
    <Layout>
      <h1>My Custom Page</h1>
    </Layout>
  );
}

export default MyPage;


Deployment
Build
# Create production build
npm run build

# Test production build locally
npm run serve


Common Deployment Commands
# GitHub Pages
GIT_USER=<username> npm run deploy

# Manual deployment
npm run build
# Copy the contents of the build directory to your hosting provider


Best Practices
Organize documentation in logical categories

Use consistent formatting

Include code examples when relevant

Keep navigation simple and intuitive

Regularly update documentation

Use versioning for major changes

Maintenance
Regularly update Docusaurus and dependencies

Monitor and fix broken links

Review and update content periodically

Back up your documentation

Troubleshooting
Common issues and solutions:

Build errors: Clear cache with npm run clear

Broken links: Use the built-in link checker

Styling issues: Check CSS specificity and theme customization

Remember to check the official documentation for more detailed information and updates.