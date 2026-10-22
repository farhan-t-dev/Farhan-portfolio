# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally by the owner's decision:

- **Freelance clients** — founders, agencies, and small teams who arrive with a repository link and a problem: a feature to add, an app that needs finishing, a fault to trace, a server or domain to migrate, or a deployment to make real. They are evaluating whether one person can be trusted with work on a system they already depend on, and they are usually comparing against other freelancers rather than against big agencies.
- **Employers and recruiters** — people assessing the same person for a full-time or contract role. They read the project list as a capability record and expect the site to hold up as a professional artefact in its own right.

Neither audience knows the owner personally at first contact, so the site has to establish competence without a referral in the room.

## Product Purpose

A personal portfolio for Tan Farhan, a freelance full-stack developer. It exists to win project work and to be credible in a hiring conversation: it shows what the work actually is, how an engagement runs, and what has been shipped, so a stranger can decide to send an email.

Success is a qualified enquiry — a message that names a real problem and a real codebase — not raw traffic. A secondary success is a recruiter or hiring manager leaving with an accurate picture of capability.

## Positioning

The claim is range on *existing* systems as much as greenfield building: new applications and new features, but equally the work of finishing what someone else started — tracing a fault to its cause, migrating a live application to new infrastructure, and handing it over documented. The mechanism that makes this credible is the process: the code is read before anything is quoted, a written plan with risks goes out, changes arrive small enough to review, and release steps are recorded for whoever comes next.

A neighbouring portfolio can show more screenshots; it cannot truthfully copy "I will read your system before I price it, and leave it documented."

## Operating Context

- Enquiries arrive by email, usually with a repository or live-site link and a description of the need (a feature, a fix, or a deployment).
- The first commercial act is scoping: reading the existing codebase or production setup before quoting, then sending a written plan.
- Work happens across frontend, backend, data, and infrastructure on the same project, often for people who have no in-house developer to supervise it.
- Visitors compare the project list against their own situation, then read the process to judge risk, then make contact.
- The owner maintains content by editing typed data modules rather than a CMS.

## Capabilities and Constraints

- Single-page home composed of hero, work, services, process, stack, about, and contact sections; a work index at `/work`; statically generated project detail pages at `/projects/<slug>`.
- Content is data-driven: identity and contact live in `src/data/site.ts`, projects in `src/data/projects.ts`, skills in `src/data/skills.ts`. Components stay presentational.
- Contact is a plain `mailto:` link. No form, no backend, no analytics, no newsletter.
- Services are parallel offers, not a sequence; the process section is a genuine sequence of four steps.
- Availability is a claim only the owner can make, and it is expressed as a labelled indicator driven by `site.ts`.
- The site is **built but not launched**. `siteUrl` is intentionally empty, and the LinkedIn link still carries a placeholder handle; both must be treated as unfinished details, not as facts to design around.
- Two projects (`mindacco`, `voice-dialer`) exist in the data file but stay commented out pending client consent and a contract check. They must not be surfaced.
- No invented credentials: the site carries no employers, years of experience, client logos, testimonials, or benchmark numbers, and the About copy deliberately omits them.
- Identity: Tan Farhan, Full-stack developer; contact farhanweb20@gmail.com; GitHub at `farhan-t-dev`.

## Brand Commitments

The voice is first person, plain, and specific — capabilities stated as things done, not adjectives. It avoids superlatives, avoids "passionate", and avoids agency-speak. Copy describes work in terms of the client's system and the state it is left in.

The owner's stated personal register is informal and unpolished (the existing About copy mentions anime and Valorant); that honesty is part of the voice and should not be sanded into corporate neutrality, but it stays subordinate to professional credibility.

## Evidence on Hand

- Eight project entries with real descriptions, tags, and outcomes; two with public repository links (PropManage, MarketFlow), several with live URLs.
- One project screenshot: `public/projects/fletched.webp` (converted from the supplied PNG, 1.65 MB → 78 KB). The other seven projects reference `/projects/<slug>.png` files that do not exist yet; the owner has confirmed they will be supplied at those paths, so listings stay in place rather than being hidden.
- One portrait: `public/images/Me.webp` (1031×1375).
- An icon at `src/app/icon.svg`.
- Absent, and not to be fabricated: testimonials, client names beyond the products themselves, performance metrics, pricing, timelines, case-study results, or press.

## Product Principles

1. **Specific beats impressive.** Every claim should name a system, an action, and an outcome. If it cannot be substantiated, it does not ship.
2. **The existing system is the subject.** The site is written for people who already have something running and are deciding whether to trust it to one person.
3. **Process is the proof.** Scoping before quoting, reviewable increments, and documented handover are the differentiators, so they must stay visible rather than buried.
4. **Two audiences, one standard.** Client work and hiring both read the same evidence; nothing should be added that only flatters one of them.
5. **The owner's own voice stays.** Plain, first-person, slightly informal writing is a feature, not a rough edge to polish away.

## Accessibility & Inclusion

The implementation already carries deliberate accessibility commitments that future work must not regress: skip link, semantic section landmarks with `sr-only` headings, `sr-only` text for outbound links and step numbering, a global `prefers-reduced-motion` rule, and documented contrast limits (red reserved for rules and markers, never body text on the dark band). No separate standard beyond WCAG AA has been set by the owner.
