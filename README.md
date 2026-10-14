# adamjkrol.com

Every change you commit to `main` goes live automatically in about a minute.
You can do everything below in GitHub's web editor. Open a folder and use **Add file → Create new file** or **Upload files**.

## Add a note

Create `src/content/notes/your-note-name/index.md`. The folder name becomes the URL (`/notes/your-note-name/`).

```markdown
---
title: "Full title shown on the Notes list"
short: "Shorter title for the page"   # optional
date: 2026-10-14
tag: "Deals"                           # small label on the page
standfirst: "One-sentence summary under the title."   # optional
# cover: ./cover.jpg                   # optional, put the image in the same folder
# home: 2                              # optional, puts it on the home page in that position
# draft: true                          # optional, keeps it off the live site
---

Write here. Headings with `##`, lists with `-`.

![](./photo-1.jpg)
```

To add images inside a note, upload them into the note's folder and reference them with `![](./file.jpg)`.

## Add a Design tile

Create `src/content/projects/project-name/index.md` and upload a `cover.jpg` into the same folder.

```markdown
---
title: "Project title"
label: "Build"          # company name or "Build"
order: 12               # position on the Design page (lower = earlier)
cover: ./cover.jpg
# home: 3               # optional, show on the home page in that position
---

Optional: extra photos and a line or two for the project page.

![](./detail-1.jpg)
```

## Swap a placeholder for a real image

Upload `cover.jpg` into the project's folder (for example `src/content/projects/combat-robot/`). Then open its `index.md` and change `# cover: ./cover.jpg` to `cover: ./cover.jpg` by deleting the `#`.

Images are resized and compressed automatically. Upload the original, full-size photo. Tiles are cropped to a 4:5 portrait.

## Edit name, role, links, or remove the "Soon" tile

`src/site.ts`

## Home page order

The home grid shows every note or project that has `home:` set, sorted by that number, followed by an "Everything else" tile.

## Run locally (optional)

```
npm install
npm run dev
```

## Hosting

Netlify or Vercel: build command `npm run build`, publish directory `dist`.
