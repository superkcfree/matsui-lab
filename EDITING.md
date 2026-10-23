# Editing the lab website on GitHub

## Change any heading or paragraph

1. Open `content/site.json` in GitHub.
2. Click the pencil icon.
3. Find the text you see on the website and change the text between its quotation marks.
4. Click **Commit changes** and save to the publishing branch (normally `main`).

For example:

```json
"title": "Our research",
"accent": "At the nanoscale.",
"description": "Write the lab's research overview here."
```

`home` controls the top introduction; `research`, `people`, `publications`, and `contact` control those sections. `general` controls the lab identity and footer. `navigation` controls the menu text. Set an accent line to `""` to remove it.

## Add a member

Open `content/members.json`. It starts with `[]`. Replace it with entries like this (replace all sample values with real member details):

```json
[
  {
    "name": "Member name",
    "role": "Graduate student",
    "bio": "A short biography or research interests.",
    "photo": "assets/member-name.jpg",
    "category": "Current members",
    "position": 1
  }
]
```

- Use **Add file → Upload files** inside the `assets` folder to upload the photo.
- Match capitalization exactly: `assets/Alex.jpg` and `assets/alex.jpg` are different.
- Use `"photo": ""` to show initials instead.
- Use `"category": "Alumni"` for a former member.
- Lower `position` values appear first.
- To add another member, put a comma after the previous closing `}` and add another object before the final `]`.
- Remove a member by removing that entire object, adjusting commas as needed.

## Add or change a research card

Edit `content/research.json`. Each card has:

```json
{
  "tag": "RESEARCH AREA",
  "title": "Your project title",
  "description": "Your own description of the project.",
  "keywords": "Keyword one · Keyword two"
}
```

Add objects inside the list, separated by commas. Their order in the file is their order on the website. Use `[]` to remove all research cards while keeping the research section heading and overview.

## Add a paper

Edit `content/papers.json`. Add another object inside the list:

```json
{
  "year": 2026,
  "journal": "Journal name",
  "authors": "Author, A., Author, B. & Matsui, H.",
  "title": "Full publication title",
  "url": "https://doi.org/YOUR-DOI",
  "topic": "Research topic"
}
```

The `topic` values automatically become filter buttons. Papers appear in file order, so put newer papers first. Use a numeric year without quotation marks. Use an empty URL (`""`) when no link is available.

## Change the PI photo

Upload a new image to `assets/`. In `content/site.json`, update `people.piPhoto`, for example `"assets/new-pi-photo.jpg"`, and update `piPhotoAlt`. You can change the PI name, role, affiliation, biography, contact email, education, and profile links in the same section.

## JSON tips

- Keep keys such as `"title"` unchanged; edit their values.
- Separate entries with commas; do not put a comma after the final entry.
- Use `\n` for a line break inside a string, such as an address.
- Use `\"` if you need quotation marks inside text.
- Do not include comments inside JSON.
- Photos should use `assets/filename.jpg`, not `/assets/filename.jpg`, so they work under a GitHub repository address.
- External links should start with `https://`.

If a JSON file has an error, the website shows a notice and retains the packaged snapshot. Correct the formatting and commit again. If a valid change has not appeared, check the repository's deployment status and refresh the browser after it completes.
