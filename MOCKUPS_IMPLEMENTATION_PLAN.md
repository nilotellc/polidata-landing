# Product Mockups Implementation Plan

**Milestone:** Product Mockups (Landing + Detail Pages)  
**GitHub:** https://github.com/nilotellc/polidata-landing/milestone/1  
**Due:** February 6, 2026  
**Issues:** 8 (all open)

---

## 🎯 Goal

Add product mockups to landing page + create detailed preview pages. Shows customers what they're signing up for (increases conversions 30-50%).

---

## 📋 Work Breakdown (8 Issues)

### Phase 1: Create Mockup Images (Issues #1, #2, #3)

**Issue #1:** Dashboard mockup (HTML + screenshot)  
**Task:** Build HTML mockup of bill tracking dashboard with fake data  
**Output:** `public/mockups/dashboard.png` (1920x1080, <500KB)  
**Time:** 60-90 min  
**Shows:**
- Search bar + filters (date, status, chamber)
- Bill list (5-10 fake bills): H.R. 1234, title, sponsor, date, status
- "Track Bill" buttons
- Sidebar: "Your Tracked Bills (3)"

---

**Issue #2:** Email digest mockup (HTML + screenshot)  
**Task:** Build HTML mockup of daily email alert  
**Output:** `public/mockups/email-digest.png` (800x1200, <500KB)  
**Time:** 45-60 min  
**Shows:**
- Subject: "Your Daily PoliData Digest - 5 new bills"
- Grouped by alert (Education: 3 bills, Climate: 2 bills)
- Bill summaries with links
- Footer: Unsubscribe | Manage preferences

---

**Issue #3:** Legislator directory mockup (HTML + screenshot)  
**Task:** Build HTML mockup of legislator contact directory  
**Output:** `public/mockups/legislator-directory.png` (1920x1080, <500KB)  
**Time:** 60-90 min  
**Shows:**
- Search bar + filters (state, party, chamber)
- Grid of legislator cards (12-20 members)
- Contact info: phone, office address, website
- "Find Your Rep" button (ZIP code lookup)

---

### Phase 2: Landing Page Integration (Issue #4)

**Issue #4:** Add ProductPreview section to landing page  
**Task:** Create component showing 3 mockup screenshots  
**Files:**
- `components/ProductPreview.tsx` (new component)
- `app/page.tsx` (add component between Solution and Pricing)
**Time:** 30-45 min  
**Shows:**
- Section title: "See PoliData in Action"
- 3 mockups with descriptions + "See Full Preview" links
- Responsive layout (mobile + desktop)

**Depends on:** Issues #1, #2, #3 (need mockup images first)

---

### Phase 3: Detailed Preview Pages (Issues #5, #6, #7, #8)

**Issue #5:** Create /preview/dashboard detail page  
**Route:** `/preview/dashboard`  
**Time:** 45-60 min  
**Shows:**
- Hero + description
- Multiple screenshots (full view, search, filters, bill detail)
- Feature list (bullets)
- CTA: "Join Waitlist"

---

**Issue #6:** Create /preview/email detail page  
**Route:** `/preview/email`  
**Time:** 30-45 min  
**Shows:**
- How alerts work
- Email screenshots (desktop + mobile)
- Settings page mockup
- CTA: "Join Waitlist"

---

**Issue #7:** Create /preview/legislators detail page  
**Route:** `/preview/legislators`  
**Time:** 30-45 min  
**Shows:**
- Directory + search + ZIP lookup
- Multiple views (grid, detail card)
- Explains 535 members included
- CTA: "Join Waitlist"

---

**Issue #8:** Create /preview landing page (overview)  
**Route:** `/preview`  
**Time:** 30 min  
**Shows:**
- Hero: "Explore PoliData"
- 3 cards linking to detail pages
- CTA: "Join Waitlist"

---

## 📂 File Structure (After Completion)

```
polidata-landing/
├── public/
│   └── mockups/
│       ├── dashboard.png (1920x1080, <500KB)
│       ├── email-digest.png (800x1200, <500KB)
│       └── legislator-directory.png (1920x1080, <500KB)
├── components/
│   ├── ProductPreview.tsx (NEW - shows 3 mockups)
│   └── ... (existing)
└── app/
    ├── page.tsx (add <ProductPreview /> section)
    ├── preview/
    │   ├── layout.tsx (shared layout)
    │   ├── page.tsx (overview landing)
    │   ├── dashboard/page.tsx
    │   ├── email/page.tsx
    │   └── legislators/page.tsx
    └── ... (existing)
```

---

## ⏱️ Time Estimate

| Phase | Tasks | Time |
|-------|-------|------|
| Phase 1: Mockup images | 3 issues | 3-4 hours |
| Phase 2: Landing integration | 1 issue | 30-45 min |
| Phase 3: Detail pages | 4 issues | 2-3 hours |
| **Total** | **8 issues** | **6-8 hours** |

**Timeline:** Can be completed in 1-2 days (split across work sessions)

---

## 🎯 Recommended Order

### Day 1: Mockup Images (3-4 hours)

**Session 1 (2 hours):**
1. ✅ Issue #1: Dashboard mockup (90 min)
2. ✅ Issue #2: Email mockup (60 min)

**Session 2 (2 hours):**
3. ✅ Issue #3: Legislator directory mockup (90 min)
4. ✅ Issue #4: Add ProductPreview to landing page (45 min)
5. ✅ Deploy + test on Vercel

---

### Day 2: Detail Pages (2-3 hours)

**Session 3 (1.5 hours):**
1. ✅ Issue #8: /preview landing page (30 min)
2. ✅ Issue #5: /preview/dashboard detail page (60 min)

**Session 4 (1.5 hours):**
3. ✅ Issue #6: /preview/email detail page (45 min)
4. ✅ Issue #7: /preview/legislators detail page (45 min)
5. ✅ Deploy + test

---

## 🚀 Quick Start (Issue #1)

### Step 1: Create Dashboard HTML Mockup

**Create:** `/tmp/mockups/dashboard.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PoliData Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50">
  <!-- Header -->
  <header class="bg-slate-900 text-white p-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-amber-500 rounded"></div>
        <h1 class="text-xl font-bold">PoliData</h1>
      </div>
      <nav class="flex gap-6">
        <a href="#" class="text-amber-500 font-semibold">Dashboard</a>
        <a href="#" class="hover:text-amber-500">Legislators</a>
        <a href="#" class="hover:text-amber-500">Settings</a>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto p-6 flex gap-6">
    <!-- Main Panel -->
    <div class="flex-1">
      <!-- Search & Filters -->
      <div class="bg-white p-4 rounded-lg shadow mb-6">
        <input 
          type="text" 
          placeholder="Search bills by keyword..." 
          class="w-full p-3 border border-slate-300 rounded-lg"
        />
        <div class="flex gap-4 mt-4">
          <select class="p-2 border border-slate-300 rounded">
            <option>Status: All</option>
            <option>Introduced</option>
            <option>Passed House</option>
            <option>Passed Senate</option>
          </select>
          <select class="p-2 border border-slate-300 rounded">
            <option>Chamber: Both</option>
            <option>House</option>
            <option>Senate</option>
          </select>
          <input type="date" class="p-2 border border-slate-300 rounded" />
        </div>
      </div>

      <!-- Bill List -->
      <h2 class="text-2xl font-bold mb-4">Recent Bills</h2>
      
      <!-- Bill 1 -->
      <div class="bg-white p-6 rounded-lg shadow mb-4 hover:shadow-lg transition">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold text-slate-900">H.R. 1234 - Education Funding Act of 2026</h3>
          <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Introduced</span>
        </div>
        <p class="text-slate-600 mb-3">
          This bill appropriates $50 billion for K-12 education funding over the next 5 years. Includes provisions for teacher pay increases, school infrastructure improvements, and special education programs.
        </p>
        <div class="flex items-center gap-4 text-sm text-slate-500">
          <span>Sponsor: Rep. Jane Doe (D-CA)</span>
          <span>Introduced: Jan 27, 2026</span>
        </div>
        <button class="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
          Track This Bill
        </button>
      </div>

      <!-- Bill 2 -->
      <div class="bg-white p-6 rounded-lg shadow mb-4 hover:shadow-lg transition">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold text-slate-900">S. 567 - Clean Energy Investment Act</h3>
          <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Committee</span>
        </div>
        <p class="text-slate-600 mb-3">
          Provides tax incentives for renewable energy investments, establishes national clean energy standards, and creates a $100B green infrastructure fund.
        </p>
        <div class="flex items-center gap-4 text-sm text-slate-500">
          <span>Sponsor: Sen. John Smith (D-NY)</span>
          <span>Introduced: Jan 25, 2026</span>
        </div>
        <button class="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
          Track This Bill
        </button>
      </div>

      <!-- Bill 3 -->
      <div class="bg-white p-6 rounded-lg shadow mb-4 hover:shadow-lg transition">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold text-slate-900">H.R. 2345 - Healthcare Access Expansion Act</h3>
          <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Introduced</span>
        </div>
        <p class="text-slate-600 mb-3">
          Expands Medicaid eligibility to cover 5 million additional Americans, increases subsidies for ACA marketplace plans, and lowers prescription drug costs.
        </p>
        <div class="flex items-center gap-4 text-sm text-slate-500">
          <span>Sponsor: Rep. Maria Garcia (D-TX)</span>
          <span>Introduced: Jan 26, 2026</span>
        </div>
        <button class="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
          Track This Bill
        </button>
      </div>
    </div>

    <!-- Sidebar -->
    <aside class="w-80">
      <div class="bg-white p-6 rounded-lg shadow sticky top-6">
        <h3 class="text-lg font-semibold mb-4">Your Tracked Bills</h3>
        <div class="space-y-3">
          <div class="p-3 bg-amber-50 border border-amber-200 rounded">
            <p class="font-semibold text-sm">H.R. 789 - Climate Action Now Act</p>
            <p class="text-xs text-slate-600">Status: Passed House</p>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded">
            <p class="font-semibold text-sm">S. 234 - Teacher Pay Equity Act</p>
            <p class="text-xs text-slate-600">Status: Committee</p>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded">
            <p class="font-semibold text-sm">H.R. 456 - Broadband Access Act</p>
            <p class="text-xs text-slate-600">Status: Introduced</p>
          </div>
        </div>
        <button class="w-full mt-4 border border-slate-300 text-slate-700 px-4 py-2 rounded hover:bg-slate-50">
          View All (12)
        </button>
      </div>
    </aside>
  </main>
</body>
</html>
```

### Step 2: Screenshot

1. Save HTML to `/tmp/mockups/dashboard.html`
2. Open in browser (Chrome/Brave)
3. Set viewport to 1920x1080
4. Take screenshot
5. Optimize with TinyPNG or similar
6. Save to `public/mockups/dashboard.png`

---

**Ready to start? Begin with Issue #1!** 🛡️
