# Update Waitlist Form: Add Pricing Tier Selection

**Date:** 2026-01-28  
**Form:** Tally (https://tally.so/embed/ob2ZRb)

---

## 🎯 Goal

Add "Which plan interests you?" question to collect pricing tier preferences from waitlist signups.

---

## 📝 Steps to Update Tally Form

### 1. Go to Tally Dashboard

**URL:** https://tally.so/forms/ob2ZRb/edit

*(Replace `ob2ZRb` with your actual form ID if different)*

---

### 2. Add New Question

**Type:** Multiple choice (single select)

**Question text:**
```
Which plan interests you most?
```

**Optional helper text:**
```
This helps us understand demand. You can change your mind later!
```

---

### 3. Add Options

**Option 1:**
```
Starter - $79/month
1 user, 25 keywords — Perfect for solo advocates
```

**Option 2:**
```
Team - $149/month ⭐
Up to 5 users, 50 keywords — Ideal for small teams
```

**Option 3:**
```
Pro - $299/month
Up to 15 users, 200 keywords — For larger organizations
```

**Option 4:**
```
Not sure yet
I need to learn more before deciding
```

---

### 4. Settings

**Required:** YES (force selection)

**Position:** After "Organization" field, before submit

**Randomize options:** NO (keep pricing order)

---

### 5. Form Order (Recommended)

```
1. Email (required)
2. Name (required)
3. Organization (optional) — "Which organization do you work for?"
4. Role (optional) — "What's your role?" [Dropdown: Executive Director, Policy Director, Communications, Researcher, Volunteer, Other]
5. 🆕 Pricing tier (required) — "Which plan interests you most?"
6. Use case (optional) — "What issues do you track?" [Text area]
7. How did you hear about us? (optional)
```

---

### 6. Update Thank You Page

**Add line:**
```
We'll reach out when your selected plan is ready!
```

---

## 📊 Expected Results

### What You'll See in Responses

**Example response:**
```
Email: sarah@climatevoice.org
Name: Sarah Johnson
Organization: Climate Voice
Role: Policy Director
Pricing tier: Team - $149/month ⭐
Use case: Track climate legislation, energy policy
Source: Twitter
```

---

### How to Analyze

**In Tally dashboard:**
1. Go to form responses
2. Filter by "Pricing tier"
3. See distribution:
   - X% chose Starter
   - X% chose Team
   - X% chose Pro
   - X% not sure

**Export to CSV:**
- Download responses
- Analyze in spreadsheet
- Calculate:
  - Expected MRR (if all convert)
  - Average tier choice
  - Correlation (e.g., Executive Directors → Pro tier)

---

## 💡 What to Do With Data

### Scenario: 60% Choose Team, 30% Starter, 10% Pro

**Interpretation:** Current pricing validated ✅

**Action:**
- Launch as planned
- Focus Team tier marketing
- Team tier is sweet spot

---

### Scenario: 70% Choose Starter, 20% Team, 10% Pro

**Interpretation:** Price-sensitive market

**Action:**
- Consider $49 "Hobby" tier
- OR improve Team tier value prop
- Focus on solo users first

---

### Scenario: 50% Choose Pro, 30% Team, 20% Starter

**Interpretation:** Underpriced OR high-value market

**Action:**
- Consider adding $499 "Enterprise" tier
- OR increase Pro to $399
- Focus on features that justify higher price

---

### Scenario: 50% Choose "Not Sure Yet"

**Interpretation:** Unclear value prop or pricing

**Action:**
- Add comparison table to landing page
- Email "not sure" people with more info
- Consider interactive pricing calculator

---

## 📧 Follow-Up Email Strategy

### Segment by Tier Choice

**Starter tier signups:**
```
Subject: PoliData Starter - Perfect for solo advocates

Hi [Name],

Thanks for joining the waitlist! You selected our Starter plan ($79/month).

Here's what you'll get:
- Track 25 federal bills/keywords
- Email alerts when bills match your keywords
- Directory of all 535 legislators with contact info
- "Find Your Rep" tool

We're launching in 6 weeks. You'll be the first to know!

Questions? Reply to this email.

- Kip
Founder, PoliData
```

**Team tier signups:**
```
Subject: PoliData Team - Built for small advocacy teams

Hi [Name],

Thanks for joining! You're interested in our Team plan ($149/month).

Here's what your team will get:
- Up to 5 team members
- Track 50 bills/keywords (shared across team)
- Legislator directory + contact info
- Invite/remove team members
- Unlimited bill tracking

Perfect for organizations with 2-5 people tracking policy.

Launch: 6 weeks. You'll be first in line.

Questions? Let's chat: [email]

- Kip
```

**Pro tier signups:**
```
Subject: PoliData Pro - Let's chat about your needs

Hi [Name],

Thanks for your interest in PoliData Pro ($299/month)!

Since you're looking at our Pro tier, I'd love to learn more about your organization:
- How many people track policy currently?
- What issues do you follow?
- Are you using any tools today?

Pro gives you:
- Up to 15 team members
- Track 200 bills/keywords
- Slack integration (coming soon)
- State tracking - 1 state (coming soon)
- Priority support

Want to hop on a quick call? I'm building this for organizations like yours.

Book 15 min: [Calendly link]

- Kip
Founder, PoliData
[email] | [phone]
```

**"Not Sure" signups:**
```
Subject: Help choosing the right PoliData plan

Hi [Name],

Thanks for joining the waitlist! I noticed you're not sure which plan fits best yet.

Let me help:

👤 Solo advocate tracking 10-25 bills? → Starter ($79)
👥 Team of 2-5 people? → Team ($149) ⭐ Most popular
🏢 Organization with 10+ people? → Pro ($299)

Still not sure? Reply with:
- How many people will use it?
- How many bills/keywords do you track?

I'll recommend the best fit.

- Kip
```

---

## 🎯 Launch Day Strategy

### Know Your MRR Before Launch

**Example: 50 waitlist signups**
- 15 chose Starter ($79) = $1,185
- 25 chose Team ($149) = $3,725
- 8 chose Pro ($299) = $2,392
- 2 not sure = ???

**Expected Day 1 MRR (50% convert):** ~$3,650

**Expected Day 1 MRR (25% convert):** ~$1,825

**This lets you forecast infrastructure needs!**

---

## 📊 Update Profit Model

After collecting data, update `finance/PROFIT_MODEL.md` with ACTUAL tier distribution instead of assumptions.

**Current assumption:** 30% Starter, 50% Team, 20% Pro

**Replace with reality:** If data shows 20% Starter, 60% Team, 20% Pro → higher MRR!

---

## ✅ Next Steps

1. **Update Tally form** (add pricing tier question)
2. **Test form** (make sure it works)
3. **Monitor responses** (check daily)
4. **Segment follow-ups** (email by tier choice)
5. **Update profit model** (with real data after 20-30 signups)

---

**This is smart validation. Most founders wait until launch to learn this. You'll know BEFORE you build.** 🛡️
