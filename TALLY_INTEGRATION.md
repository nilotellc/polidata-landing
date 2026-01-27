# Tally Form Integration Guide

## For Kip: After Creating Tally Form

Once you have the Tally embed code (looks like this):

```html
<iframe
  data-tally-src="https://tally.so/embed/YOUR-FORM-ID?..."
  loading="lazy"
  width="100%"
  height="500"
  frameBorder="0"
  title="Join Waitlist"
></iframe>
<script>
  var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
</script>
```

**Send it to me and I'll:**
1. Update `components/WaitlistForm.tsx`
2. Add Tally script to `app/layout.tsx`
3. Test locally
4. Push to GitHub
5. Mark Issue #7 complete

---

## Steps for You (5 minutes)

1. Create Tally form at https://tally.so
2. Add 5 questions (see instructions above)
3. Set redirect: `https://getpolidata.com/thank-you`
4. Connect Google Sheets
5. Get embed code (Share → Embed)
6. **Paste embed code in Telegram**

---

## What I'll Update

### File 1: `components/WaitlistForm.tsx`
Replace placeholder form with Tally embed

### File 2: `app/layout.tsx`
Add Tally script tag for proper loading

### File 3: Update Issue #7
Mark landing page complete ✅

---

## After Integration

**You do:**
1. Go to Vercel dashboard
2. Click "Redeploy" (or push auto-deploys)
3. Test form submission
4. Check Google Sheets (should auto-populate)
5. Verify redirect to `/thank-you` works

**Then Issue #7 = DONE** ✅
