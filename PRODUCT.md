# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Both everyday Mac users and customization enthusiasts, equally.

- **Everyday Mac users:** people who'd enjoy a fun, cheap visual upgrade. Assume no technical knowledge.
- **Tinkerers:** people who already run tools like AltTab or DockDoor. They want enough detail to trust and compare.

The job: decide in a minute or two that MacMin is fun and safe, download it free, and later decide Pro is worth $5 and grant permissions without fear.

## Product Purpose

MacMin is a macOS menu bar app. It replaces the system minimize animation with GPU (Metal) shader effects:

- Liquid Glass
- Liquid Metal
- Blobs
- Shatter
- DuoFold
- Black Hole
- Dissolve
- Television
- Burn
- Smoke

Each effect has a setting or two in the menu (for example glass frosting, metal colour, a colour or rainbow for Blobs, Black Hole, Television and Burn, DuoFold's fold side and cracked screen, the amount of smoke, which way Snow's wind blows and how many snowflakes).

This site (macmin.studiographic.ca) explains what MacMin does and how it works, in plain language. It also sells the app and is where it's downloaded. Success means visitors pay, install and keep the app on.

## Positioning

- Apple shipped Genie and Scale in 2001 and has added nothing since. MacMin brings minimize animations "into the... present?"
- Liquid Glass is the headline effect and selling feature.
- It's an indie, one-person product sold directly, not through the App Store.

## Operating Context

- **Model:** free download with Liquid Glass and Liquid Metal. Pro unlocks the other nine effects (and future ones) for $5 once (CAD, or USD for US buyers). Pro checkout is a Stripe Payment Link (test mode for now); licensing is not set up yet.
- **Download:** the free DMG is linked at `download/<file>` from `version.json`.
- **Download:** a notarized, Developer ID–signed DMG, with a published SHA-256 checksum.
- **Updates:** the app checks `version.json` on this site once a day, and the user can turn that off.
- **Permissions:** install requires granting Accessibility and Screen Recording. Since Sequoia, macOS periodically re-prompts for Screen Recording.
- **Requirements:** macOS 14 Sonoma or later.
  - Apple silicon is smooth.
  - Intel Macs from 2018 on work, and lighter effects are recommended on them.
  - Macs from 2017 and earlier can't install it, except the iMac Pro.
- **Hosting:** GitHub Pages, from the public repo m22stewa/macmin-site. The app source is private.

## Capabilities and Constraints

- **Pricing promises:** free tier forever with no nagging; Pro is $5 once, every Mac you own, lifetime updates, no subscription.
- **Effect names are fixed:** Blobs (not Goo), Dissolve (not Sand) and Television (not TV Off).
- **Privacy claims must stay accurate:**
  - Nothing is saved or sent.
  - The only network call is the update check.
  - Typed input is never kept or recorded.
  - Don't claim things the app can't guarantee, such as "no recording indicator".
- **Contact:** macmin@studiographic.ca.
- **Open:**
  - the Buy Me a Coffee minimum price (shop page: https://buymeacoffee.com/studiographic/e/598104);
  - the real DMG checksum, until the first release build;
  - verification of the historical timeline facts.

## Brand Commitments

- **Voice:** playful, self-deprecating and casual. It comes from the owner's blurb:
  - "Minimizing apps should be cool! (Or not. I dunno.)"
  - "Bring minimize animations into the... present?"
  - The site should read as made by one person who cares way too much about minimize animations.
- **Assets:** the app icon is yellow glass (`media/icon.png`), and the warm yellow accent matches the app.
- **Media:** clips are rendered from the real app, with generic windows over the Apple wallpaper.

## Evidence on Hand

- **Real assets:** effect clips, GIFs and posters, rendered from the real app, plus `hero.mp4` (in `media/`).
- **Measured performance:** GPU timings on an M5. Intel performance is estimated, not tested.
- **None yet:** testimonials, press, user counts or reviews. Never fabricate them.

## Product Principles

1. **Show, don't claim.** The real effects, especially Liquid Glass, do the selling.
2. **Trust in plain words.** Explain the permissions and privacy honestly enough for a non-technical person to say yes.
3. **Free first, fair Pro.** Make clear the download is free, Pro is $5 once, covers every Mac you own and has no subscription.
4. **Fun first, depth on demand.** Lead with the joke and the visuals, and keep the specs and compatibility one click away for tinkerers.
5. **Never overstate.** Don't make untested performance claims or invent social proof.

## Accessibility & Inclusion

Respect Reduce Motion: pause the clips and show their controls. Body text needs WCAG AA contrast.
