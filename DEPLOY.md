# Deploy to Vercel

## Quick Deploy (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import `nilotellc/polidata-landing` from GitHub
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
5. Click "Deploy"
6. After deployment, connect custom domain `getpolidata.com`

## Vercel CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Connect Custom Domain

1. In Vercel dashboard → Project Settings → Domains
2. Add domain: `getpolidata.com`
3. In Cloudflare DNS, add CNAME:
   - Type: `CNAME`
   - Name: `@` (or `www`)
   - Target: `cname.vercel-dns.com`
   - Proxy: OFF (orange cloud)

## Environment Variables

None needed for landing page (static site).

## Next Steps After Deployment

1. **Create Tally form** at https://tally.so
   - Fields: email, organization, job title (optional), keywords (optional), source
   - Enable email notifications
   - Get embed code

2. **Replace form** in `components/WaitlistForm.tsx`
   - Replace placeholder form with Tally embed
   - Test submission → Thank you page redirect

3. **Set up analytics** (optional)
   - Plausible: Add script to `app/layout.tsx`
   - OR Google Analytics 4
   - Track: page views, form submissions, button clicks

4. **Configure UTM parameters** for ads
   - Google Ads: `?utm_source=google&utm_medium=cpc&utm_campaign=smoke_test`
   - LinkedIn: `?utm_source=linkedin&utm_medium=paid_social&utm_campaign=smoke_test`

## Monitoring

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Analytics:** Vercel Analytics (built-in) or Plausible
- **Logs:** Vercel → Project → Logs

## Troubleshooting

### Build fails
- Check `npm run build` locally
- Verify all dependencies in `package.json`

### Custom domain not working
- Wait 24-48h for DNS propagation
- Verify CNAME record in Cloudflare
- Turn off Cloudflare proxy (orange cloud → gray cloud)

### Form not submitting
- Replace placeholder form with Tally embed
- Check Tally form is published
- Verify redirect to `/thank-you` works
