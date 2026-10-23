# Matsui Lab — GitHub Pages website

A static version of the Matsui Lab website. It keeps the purple and cream design, People, Research, searchable Papers, and contact section. The removed homepage illustration and disputed research card are not included.

No paid services, database, account login, package installation, or build are required to run this version. Editing happens in the GitHub repository.

## Publish using the GitHub website

1. Create a repository named `matsui-lab`. Choose **Public** if you are using GitHub Free.
2. Extract the ZIP on your computer. Open the extracted `matsui-lab-github` folder.
3. In your repository, choose **Add file → Upload files**. Upload the **contents** of this folder. `index.html` must appear directly at the repository's top level, alongside `assets` and `content`; do not upload only the ZIP or wrap everything in another folder.
4. Click **Commit changes**.
5. Open the repository's **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
7. Wait for GitHub's deployment to finish. The Pages settings will show your live URL, normally `https://YOUR-USERNAME.github.io/matsui-lab/`.

For a repository named `YOUR-USERNAME.github.io`, the address is the account's root site instead. This website supports both repository subpaths and custom domains without code changes.

GitHub's official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit through GitHub

Open a file, click the **pencil / Edit this file**, change the values, and click **Commit changes**. After GitHub republishes the site, reload the website.

| What to change | File |
| --- | --- |
| Headlines, descriptions, navigation, PI biography and education, contact details, footer | `content/site.json` |
| Research cards (add, edit, remove, reorder) | `content/research.json` |
| Publication titles, years, authors, journals, links, filter topics | `content/papers.json` |
| Lab member names, roles, bios, photos, current/alumni category, order | `content/members.json` |
| Member and PI photos | Upload to `assets/`, then reference the filename in the relevant JSON file |
| Colors, spacing, typography | `assets/styles.css` |

Read **EDITING.md** for examples. You edit values, not the rendering code. Keep quotation marks, commas, braces, and brackets valid JSON. Do not put private information or passwords in the repository.

## Preview on your computer (optional)

Run `python3 -m http.server 8000` inside this folder, then visit `http://localhost:8000`. Opening `index.html` by double-click may show the packaged snapshot, but browsers restrict loading JSON from local files. Use a local server or GitHub Pages for normal operation.

## How updates work

`assets/app.mjs` loads the four public JSON files and refreshes the content. It uses relative URLs, so a repository path such as `/matsui-lab/` works. Paper filtering and searching run in the browser. GitHub Pages does not need a server or database.

The site also contains a pre-rendered HTML snapshot for no-JavaScript visitors. Normal GitHub edits update the JavaScript-enabled site directly. To refresh that optional snapshot, run `node build.mjs` and commit the updated `index.html`. Node is only needed for that optional operation.

The former `/admin` form editor and ChatGPT login are intentionally replaced by repository editing. The current hosted site is separate and is not changed by this export.

## Sources

Initial PI details, research overview, and selected publication links were prepared from the Hunter College faculty profile and CUNY profiles. Review and update the text for the lab's current work before sharing widely.

- https://www.hunter.cuny.edu/people/hiroshi-matsui/
- https://www.gc.cuny.edu/people/hiroshi-matsui

Fonts are loaded from Google Fonts, with local system fallbacks. The PI photo is copied from the supplied Hunter faculty profile. No personal editor email, authentication secrets, server credentials, or database files are included.
