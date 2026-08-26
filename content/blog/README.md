# How to publish a blog post

Each post is one Markdown file in this directory. The file name is the URL slug.
`content/blog/my-post.md` becomes `/blog/my-post/`.

## Steps

1. Create the file: `content/blog/<slug>.md`.
2. Add the frontmatter block at the top.
3. Write the post in Markdown below the frontmatter.
4. Run `npm run build` to check the page.
5. Commit and push. The deploy step exports the new page.

## Frontmatter

```markdown
---
title: "The title of the post"
date: "2026-08-27"
excerpt: "One or two sentences. The card on the home page shows this text."
tags: ["postgresql", "redis"]
draft: false
---
```

- `title` — required. The page prints it once, as the heading.
- `date` — required, in `YYYY-MM-DD` form. The list sorts on this field, newest first.
- `excerpt` — the card text and the page description.
- `tags` — optional list.
- `draft` — set `true` to keep the post out of the build.

## Body rules

- Do not repeat the title as an H1. If you do, the build removes the first H1.
- A single italic line after the title becomes the deck (the subtitle).
- Start section headings at `##`.
- Read time comes from the word count. You do not set it.

## Code and diagrams

Fenced code blocks get a language label:

    ```sql
    SELECT 1;
    ```

A `mermaid` fence renders as a diagram in the browser:

    ```mermaid
    sequenceDiagram
        A->>B: hello
    ```

The diagram colours follow the site palette. The page loads the diagram library
only when the post has at least one `mermaid` fence.

The build skips this README file and any file whose name starts with `_`. It also
skips a file that has no `title` in its frontmatter.

Markdown files are the only source of live posts. The `blog` list in
`src/data/cv.json` holds the "Coming soon" cards only. Do not add a live entry
there; the page does not show it.
