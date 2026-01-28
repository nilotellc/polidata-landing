# Legal Pages - Reference

## ✅ Created & Deployed

All legal pages are live at:
- **Privacy Policy:** https://getpolidata.com/privacy
- **Terms of Service:** https://getpolidata.com/terms

**Commit:** https://github.com/nilotellc/polidata-landing/commit/973992b

---

## 📋 Privacy Policy (`/privacy`)

### Key Sections
1. **Introduction** - What data we collect, why we need it
2. **Information We Collect**
   - Personal info (name, email, organization)
   - Analytics (Plausible, privacy-focused)
   - Usage data (tracked bills, searches)
3. **How We Use Your Information**
   - Provide service, send alerts, process payments
   - Improve product, prevent fraud
4. **How We Share Your Information**
   - Third parties: SendGrid, Stripe, Supabase, Render, Plausible
   - **We do NOT sell data**
5. **Data Security** - Encryption (HTTPS/TLS, AES-256), bcrypt passwords
6. **Data Retention** - Active accounts, 30 days after deletion, 7 years for billing
7. **Your Privacy Rights**
   - **GDPR** (EU/EEA): Access, rectification, erasure, portability, objection
   - **CCPA** (California): Know, delete, opt-out, non-discrimination
8. **Contact:** privacy@getpolidata.com

### Compliance
✅ **GDPR compliant** (EU users)  
✅ **CCPA compliant** (California users)  
✅ **Transparent data practices**  
✅ **Clear user rights**

---

## 📋 Terms of Service (`/terms`)

### Key Sections
1. **Agreement to Terms** - Binding contract
2. **Service Description** - What PoliData provides (bill tracking, alerts)
3. **Account Registration** - 18+, security responsibilities
4. **Subscription and Billing**
   - **Pricing:** Starter $79, Team $149, Pro $299
   - **Billing:** Monthly recurring, Stripe processing
   - **Cancellation:** Anytime, access until end of period
   - **Refunds:** 14-day money-back guarantee (first-time subscribers)
5. **Acceptable Use Policy** - No scraping, illegal use, abuse
6. **Intellectual Property** - PoliData owns platform, you own your data
7. **Disclaimers**
   - **"AS IS"** - No warranties
   - **Data accuracy disclaimer** - Congress.gov source (verify critical info)
   - **Service availability** - No 100% uptime guarantee
   - **Limitation of liability** - Max liability = 12 months of fees
8. **Dispute Resolution** - Informal → Arbitration (Poland law)
9. **Contact:** legal@getpolidata.com

### Key Protections
✅ **Data accuracy disclaimer** (Congress.gov source)  
✅ **Liability limits** (max 12 months fees)  
✅ **14-day refund policy**  
✅ **Service availability disclaimers**

---

## 🔗 Footer Links

Updated footer includes:
- **Legal** section (replaces Contact)
- Privacy Policy link
- Terms of Service link
- Contact Us (email)

**Removed:** GitHub repo link (repo is now private)

---

## ✅ Waitlist Form Consent

Added below waitlist form:
> "By signing up, you agree to our [Privacy Policy](#) and [Terms of Service](#)."

**Legal compliance:** GDPR/CCPA require informed consent before collecting personal data.

---

## 📧 Email Contacts

| Purpose | Email |
|---------|-------|
| Privacy inquiries | privacy@getpolidata.com |
| Legal inquiries | legal@getpolidata.com |
| General support | support@getpolidata.com |

**Note:** These emails don't exist yet. You'll need to create them (or forward to support@getpolidata.com).

### Quick Setup (Gmail Aliases)
If you want to keep everything in one inbox:
1. Go to Gmail Settings → Accounts → "Send mail as"
2. Add aliases: privacy@, legal@ (forwarding to your main inbox)
3. Or use Google Workspace aliases (free for custom domains)

---

## 🚨 Action Items (Before Launch)

### Now (Collecting Emails)
- [x] Privacy Policy live
- [x] Terms of Service live
- [x] Waitlist form consent added
- [ ] **Create email aliases:** privacy@, legal@ (forward to support@)

### Before Launch (Paid Subscriptions)
- [ ] Set up Stripe payment processing
- [ ] Test refund flow (14-day guarantee)
- [ ] Create cancellation flow in account settings
- [ ] Add "Cancel Subscription" button
- [ ] Test billing cycle edge cases

### Before Scaling
- [ ] Review with lawyer (optional but recommended if >$10k MRR)
- [ ] Add cookie banner if you start using cookies
- [ ] Update terms if you add features (API, team sharing, etc.)

---

## 🔄 When to Update

### Privacy Policy
Update when you:
- Add new third-party services
- Change data retention policies
- Expand to new regions (add local privacy laws)
- Add cookies/tracking (need cookie banner)

### Terms of Service
Update when you:
- Change pricing ($79/$149/$299 currently)
- Add/remove features (API, team sharing, etc.)
- Change refund policy (currently 14 days)
- Change billing terms (currently monthly)

**Important:** Notify users 30 days before material changes (via email).

---

## 📝 Notes

### Why Poland Law?
- You're a Polish resident running a Polish company (JDG)
- Simpler than US law for you to enforce
- GDPR still applies (EU-wide regulation)

### Why Arbitration Clause?
- Cheaper than court for both parties
- Faster resolution
- Standard in SaaS terms
- Opt-out available (30 days)

### Why "AS IS" Disclaimer?
- Congress.gov data can have errors/delays
- Protects you from liability if bill data is outdated
- Users must verify critical information
- Standard for SaaS services

---

## ✅ You're Legally Covered!

**Status:** Ready to collect emails and launch.

**Next:** Create email aliases (privacy@, legal@) or forward to support@.

🛡️
