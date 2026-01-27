# Google Analytics 4 Setup Guide

## ✅ Integration Complete

**Measurement ID:** `G-9LEH2YD3K4`  
**Property Name:** PoliData  
**Website:** https://getpolidata.com

---

## 📊 What's Being Tracked

### Automatic Tracking (Out of the Box)
- **Page views** - Every page load (/, /thank-you)
- **Sessions** - User visits to the site
- **Users** - New vs returning visitors
- **Traffic sources** - Where visitors come from
- **Device types** - Mobile, desktop, tablet
- **Location** - Country, city
- **UTM parameters** - Ad campaign tracking

### Custom Events (Configured)
1. **`conversion`** - Main conversion event (fires on /thank-you page)
   - `event_category`: "waitlist"
   - `event_label`: "signup_complete"
   - `value`: 1

2. **`form_submit`** - Form submission tracking
   - `event_category`: "waitlist"
   - `event_label`: "tally_form"
   - `value`: 1

3. **Tally form events** (via `formEventsForwarding=1`)
   - Form viewed
   - Form started
   - Form submitted

---

## 🧪 Testing Your Tracking

### After Deploying to Vercel:

1. **Visit your site:** https://getpolidata.com
2. **Open GA4 in another tab:** https://analytics.google.com
3. **Go to:** Reports → Realtime
4. **You should see:**
   - 1 active user (you)
   - Current page: "/"
   - Event: `page_view`

5. **Scroll to waitlist form and submit it** (test email)
6. **In GA4 Real-Time, check:**
   - Event: `form_submit` (should appear)
   - Event: `conversion` (should appear after redirect)
   - Current page: "/thank-you"

### Verify Conversion Tracking Works:
- GA4 → Events (left sidebar)
- Look for: `conversion` and `form_submit` events
- Should show 1 event each (from your test)

---

## 🎯 Using GA4 for Ad Campaigns

### Step 1: Add UTM Parameters to Ad URLs

**Google Ads:**
```
https://getpolidata.com?utm_source=google&utm_medium=cpc&utm_campaign=smoke_test
```

**LinkedIn Ads:**
```
https://getpolidata.com?utm_source=linkedin&utm_medium=paid_social&utm_campaign=smoke_test
```

**Twitter/X:**
```
https://getpolidata.com?utm_source=twitter&utm_medium=social&utm_campaign=smoke_test
```

**Cold Email:**
```
https://getpolidata.com?utm_source=email&utm_medium=cold_outreach&utm_campaign=smoke_test
```

### Step 2: Track Ad Performance

**In GA4:**
- Reports → Acquisition → Traffic acquisition
- See breakdown by source/medium
- Filter by campaign: "smoke_test"

**Metrics to watch:**
- Sessions (clicks from ads)
- Users (unique visitors from ads)
- Conversions (form submissions)
- Conversion rate (conversions / sessions)

---

## 🔗 Link GA4 to Google Ads (After Creating Ads Account)

### Step 1: Link Accounts
1. GA4 → Admin (bottom left)
2. Product Links → Google Ads Links
3. Click "Link" and select your Google Ads account
4. Save

### Step 2: Import Conversions
1. Google Ads → Tools → Conversions
2. Click "+" → Import → Google Analytics 4
3. Select `conversion` event
4. Import as conversion action

### Step 3: Set as Primary Conversion
1. Mark `conversion` as primary goal
2. Google Ads will optimize campaigns for this conversion

**Result:** Google Ads will automatically optimize to get more form submissions (not just clicks)

---

## 📈 Key Reports to Check Daily (During Smoke Test)

### 1. Real-Time Report
**What:** Live view of current visitors  
**Why:** Verify ads are driving traffic  
**Check:** Every hour during ad campaign

### 2. Acquisition → Traffic Acquisition
**What:** Where visitors come from  
**Why:** See which ad source (Google, LinkedIn) performs best  
**Check:** Daily

### 3. Events
**What:** All tracked events  
**Why:** Count form submissions (conversions)  
**Check:** Daily

### 4. Conversions
**What:** All conversion events  
**Why:** Track total signups  
**Check:** Daily

---

## 🎯 Key Metrics for Smoke Test Validation

### Success Metrics:
- **Total signups:** Goal = 10-20 in week 1
- **Conversion rate:** Target = 3-5% (good for cold traffic)
- **Cost per signup:** Target = $5-15 per signup
- **Traffic sources:** Which channel works best (Google vs LinkedIn)

### Example Analysis:
```
Google Ads:
- 200 clicks
- 8 signups
- Conversion rate: 4% ✅
- Cost per signup: $12.50 ✅

LinkedIn Ads:
- 150 clicks  
- 3 signups
- Conversion rate: 2% ⚠️
- Cost per signup: $25 ⚠️

Conclusion: Google Ads performs better for PoliData
```

---

## 🛠️ Troubleshooting

### "I don't see any data in GA4"
- Wait 24-48 hours for data to populate (not instant)
- Check Real-Time report first (shows live data)
- Verify GA4 script is loading (View Page Source → search for G-9LEH2YD3K4)

### "Conversions aren't tracking"
- Test by submitting form yourself
- Check /thank-you page loads (conversion fires there)
- Look in Events report (not Conversions) first

### "UTM parameters not showing"
- Check URL includes ?utm_source=... in address bar
- GA4 → Acquisition → Traffic acquisition → Filter by source

---

## 📝 Notes

- GA4 data processes in 24-48 hours (Real-Time is instant)
- Keep UTM parameters consistent across all campaigns
- Export data weekly to Google Sheets for backup
- Tally form data (emails, org names) goes to Google Sheets
- GA4 tracks anonymous traffic + conversions

---

## ✅ Ready For Launch!

GA4 is fully integrated and tracking conversions. Deploy to Vercel, test once, then launch ads! 🚀
