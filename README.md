# Portfolio — adityajadhav.dev

Next.js (App Router) + TypeScript + Tailwind, exported as static files, served
from S3 behind CloudFront, provisioned with Terraform and deployed by GitHub
Actions over OIDC.

## Architecture note (the version that goes in the footer)

> This site is a Next.js static export. Every push to `main` runs typecheck,
> lint and build in GitHub Actions, assumes a scoped AWS role via OIDC (no
> long-lived keys), syncs the artefact to a private S3 bucket in two passes —
> fingerprinted assets `immutable, max-age=1y`, HTML `must-revalidate` — then
> invalidates the CloudFront distribution. The bucket is never public; the CDN
> reads it through an Origin Access Control. Infrastructure is Terraform:
> bucket, OAC, ACM certificate, security-headers policy, a CloudFront Function
> that rewrites directory URLs to `index.html`, and the IAM role the pipeline
> assumes. A Lighthouse budget runs after deploy and fails loudly on regression.

## Why S3 + CloudFront rather than Amplify

Amplify is one click, but it hides the pipeline. This layout keeps every moving
part inspectable and reproducible, and stays inside the free tier: S3 storage is
cents at this size, CloudFront's always-free tier covers portfolio traffic, and
the domain is the only real line item.

## Local

    npm install
    npm run dev

## First deploy

1. `cd infra && terraform init && terraform apply -var-file=prod.tfvars`
2. Create the CNAMEs from `certificate_validation_records` at your DNS provider.
3. Add repo secrets: `AWS_DEPLOY_ROLE_ARN`, `SITE_BUCKET`,
   `CLOUDFRONT_DISTRIBUTION_ID` (all Terraform outputs).
4. Push to `main`.

## Adding a case study

Copy the `CaseStudy` object in `lib/content.ts`. Required: `problem`,
`role`, `stages` (each with `title`, `body`, `tradeoff`) and `links`.
`metrics` is optional — leave the array empty and the block does not render.
Do not ship a placeholder number.

## Accessibility

- Skip link, landmark elements, single `h1`, ordered heading levels.
- Diagram stages are real `<button>`s: hover, click and keyboard all work, and
  the decision panel is `aria-live="polite"`.
- Colour tokens are checked at AA in both themes; theme is set before paint.
- `prefers-reduced-motion` disables smooth scrolling and transitions.
