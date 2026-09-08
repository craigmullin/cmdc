# Contact and Résumé Handoff

## Decision

Replace the current Contact navigation behavior, which sends visitors to GitHub, with
an intentional contact experience on `craigmullin.com`. Add a downloadable public
résumé and use `craig@craigmullin.com` as Craig's professional email address once
inbound and outbound email have been verified.

This should feel like a natural completion of the portfolio rather than a new
feature area.

## Outcomes

Visitors should be able to:

- understand how to contact Craig without being redirected unexpectedly;
- email Craig at `craig@craigmullin.com`;
- reach Craig's LinkedIn and GitHub profiles;
- find and download a current résumé PDF;
- distinguish Contact, Résumé, and GitHub as separate destinations.

## Navigation

Preferred primary navigation:

`Home · About · Work · Résumé · Contact`

Adapt the labels to the site's existing information architecture if necessary,
but preserve the separation between:

- **Work:** portfolio projects;
- **Résumé:** professional history and PDF download;
- **Contact:** direct communication choices;
- **GitHub:** an external profile link, not the Contact destination.

On smaller screens, keep the same destinations in the existing mobile navigation
pattern.

## Contact experience

Create a dedicated Contact route or section that is directly reachable from the
primary navigation.

Suggested starting copy:

> **Let's talk.**
>
> I'm interested in senior software engineering, product-minded development,
> and thoughtful uses of AI.

Provide three clear actions:

1. **Email Craig** — `mailto:craig@craigmullin.com`
2. **LinkedIn** — Craig's existing LinkedIn profile
3. **GitHub** — Craig's existing GitHub profile

Display `craig@craigmullin.com` as readable text as well as making it clickable.
External profile links should use the site's established external-link behavior.

Do not add a contact form in this pass. A form adds submission handling, spam
protection, validation, and delivery monitoring without improving the initial
experience enough to justify the complexity. The direct email action is the
intentional MVP.

## Résumé experience

Craig will provide the final PDF. Use a stable, human-readable public filename,
preferably:

`public/craig-mullin-resume.pdf`

Add a visible **Download Résumé** action:

- on the About page or About section;
- in the Résumé navigation destination;
- optionally in the footer if that remains visually quiet.

The dedicated Résumé destination may be a restrained landing section rather than
a complete HTML transcription in this pass. It should include:

- Craig's name and professional focus;
- a brief sentence explaining that the PDF contains full experience and skills;
- the Download Résumé button;
- a secondary Contact action.

Open or download behavior should be conventional and accessible. Do not force a
download if the browser can preview the PDF naturally.

Use a public résumé version that excludes a street address and any information
Craig does not want indexed. The résumé itself should list
`craig@craigmullin.com`.

An HTML résumé for search visibility may be considered later, but is not part of
this pass.

## Email readiness gate

Before publishing the new address site-wide or in the résumé, Craig should
confirm:

- mail sent to `craig@craigmullin.com` arrives in the intended Gmail inbox;
- test messages arrive from at least Gmail and one non-Gmail provider;
- Gmail can send or reply with `craig@craigmullin.com` as the visible From
  address, or Craig explicitly accepts replies showing his Gmail address;
- SPF and any other sending-provider authentication records are valid.

The website implementation may be completed before this verification, but
production publication of the new address should wait for Craig's confirmation.

## Content and implementation notes

- Reuse the established design system and current content model in
  `src/data/site.ts`; keep contact values configurable rather than scattering
  them through components.
- Preserve the existing Firebase project and deployment configuration.
- Keep the interface restrained. The Contact and Résumé areas should use white
  space, typography, and a small number of purposeful actions rather than cards
  or decorative UI added only to fill space.
- Avoid adding animation unless it explains navigation or state.
- Ensure keyboard focus, visible focus styles, semantic headings, descriptive
  link text, and adequate touch targets.
- Confirm that `mailto:` and external links remain usable on desktop and mobile.
- Update page titles, descriptions, and relevant social metadata for the new
  destinations if routing changes introduce standalone pages.
- Do not deploy without Craig's explicit authorization.

## Suggested implementation sequence

1. Add the email, LinkedIn, GitHub, and résumé path to the central site data.
2. Separate GitHub from the Contact navigation item.
3. Build the Contact destination and its three actions.
4. Add the Résumé destination and About-page download action.
5. Add Craig's supplied PDF under the agreed stable filename.
6. Verify responsive behavior, accessibility, routes, and PDF access.
7. Run lint and the production build.
8. Show Craig the completed local or branch preview and confirm email readiness.
9. Deploy only after explicit approval.

## Acceptance criteria

- Contact no longer redirects directly to GitHub.
- Contact presents the professional email, LinkedIn, and GitHub distinctly.
- `craig@craigmullin.com` is displayed and opens a correctly addressed email.
- Résumé is a distinct primary-navigation destination.
- A visitor can open Craig's supplied résumé PDF from both Résumé and About.
- No private street address or unintended personal information is introduced.
- Existing portfolio links and content continue to work.
- Desktop and mobile navigation remain clear and keyboard accessible.
- Lint and production build pass.
- No production deployment occurs as part of this handoff.
