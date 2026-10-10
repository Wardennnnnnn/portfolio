# Render deployment

Target: private GitHub repository `Wardennnnnnn/portfolio`, branch `main`, with a public Render Static Site named `terincorp-portfolio`. Use the existing Render account/workspace that owns SafeTap, and create a separate service. No database or running Node server is required.

## Repository

This directory (`terincorp/` locally) is the Git repository root. Push its contents directly to the target repository root, without an enclosing `terincorp/` directory. Include `app/`, `components/`, `lib/`, `public/`, scripts, tests, documentation, configuration, and `package-lock.json`. `.gitignore` excludes dependencies, build outputs, environment files, private local agent/hosting state, and duplicate root reference images/PDFs. Published screenshots remain under `public/assets/`. Retain `legacy-static/` as a documented fallback; Render publishes only `out/`.

No GitHub remote or external account access was available when this configuration was prepared. Repository existence and visibility must be confirmed through the authenticated account. Create the repository as private if it does not exist. If it already has commits, fetch and review them before integrating; never force-push over existing history.

For an empty repository, from this directory:

```sh
git remote add origin https://github.com/Wardennnnnnn/portfolio.git
git add .
git diff --cached --stat
git commit -m "Prepare portfolio static export for Render"
git push -u origin main
```

Inspect staged files before committing. Do not place credentials in the remote URL, source files, or documentation. Use existing GitHub authentication.

## Initial deployment

1. Sign into the Render account/workspace that owns SafeTap. Confirm no service named `terincorp-portfolio` already exists before creating one.
2. Use New → Static Site and select the private repository through the existing GitHub authorization. If Render lacks access, authorize only this repository through the account owner. A new Blueprint using `render.yaml` is an alternative; keep Blueprint auto-sync off for manual release control.
3. Set name `terincorp-portfolio`, branch `main`, Root Directory blank, Build Command `npm ci && npm run build`, Publish Directory `out`, and Auto-Deploy Off. `.node-version` pins Node `22.23.1`.
4. Do not accept a paid upgrade or additional charge. Stop and hand off any billing requirement, including custom-domain overages.
5. Trigger the initial deployment. Wait for a successful build and Live status. Record the actual generated `onrender.com` URL and deployed commit from Render; do not infer the hostname from the service name.
6. Request that URL over HTTPS and confirm the portfolio is returned. Retain the Render URL throughout custom-domain rollout.

## Domain rollout and rollback

Only continue after the Render URL is live. In the portfolio service Settings → Custom Domains, add `terincorp.com`. Render automatically adds `www.terincorp.com` and redirects it to the root domain. Confirm the account's domain allowance before accepting any charge.

Before DNS changes, export the Cloudflare zone or securely record every existing apex (`@`/`terincorp.com`) and `www` record's type, value, TTL, priority where applicable, and proxy status. This rollback snapshot has not been captured: no authenticated Cloudflare access was available. Keep it outside Git if it contains private operational details.

Use the exact DNS targets displayed by Render for this newly created service. Follow the current Render Cloudflare instructions linked below; do not guess the service URL or reuse SafeTap's target. Change only website-routing records for the apex and `www`; remove conflicting apex/`www` AAAA records only if Render requires it. Preserve `safetap.terincorp.com`, email records (including MX, SPF, DKIM, DMARC), other records, and nameservers. Do not delete unrelated records to resolve verification failures.

Click Verify in Render for both domains and wait for verified domain status and issued TLS certificates. Confirm HTTPS returns the portfolio at `https://terincorp.com` and `https://www.terincorp.com` redirects to the root. Compare the preserved DNS records with the snapshot. If verification fails, retain the Render URL and stop unrelated DNS edits. If rollback is needed, restore only the apex/`www` website records changed during this rollout, including their TTL and proxy settings.

## Verification record

- Local build: passed on October 10, 2026 using Node `22.23.1` and npm `10.9.8`. `npm ci && npm run build` completed successfully; Next.js exported the homepage, eight project case studies, not-found output, robots, and sitemap into `out/`. No additional test suite was run.
- GitHub push / private visibility: not verified; account access unavailable.
- Render build / Live status / returned URL: not verified; account access unavailable.
- Domain DNS / TLS / www redirect: not verified; account access unavailable.
- SafeTap and unrelated DNS: no external changes performed.
- Additional test suites and browser/mobile checks: explicitly skipped for this deployment task. Mobile behavior remains unverified.

Future releases use a reviewed GitHub commit followed by Render Manual Deploy → Deploy latest commit. Automatic deployments remain off. Preserve original `lib/security-history.ts` records; append only evidence-backed fixes with the actual version and a `resolves` reference.

## Official references

- [Next.js static export on Render](https://render.com/docs/deploy-nextjs-app)
- [Blueprint fields](https://render.com/docs/blueprint-spec)
- [Custom domains and TLS](https://render.com/docs/custom-domains)
- [Cloudflare DNS configuration](https://render.com/docs/configure-cloudflare-dns)
