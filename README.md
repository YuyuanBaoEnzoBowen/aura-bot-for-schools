# Aura Bot for Schools

*A data-driven emotional wellness platform connecting students, parents, and schools.*

This project was developed as part of the **Digital Startup Lab (ENT207TC)** module at XJTLU Entrepreneur College (Taicang).  
Our goal is to design and prototype a **B2B2C SaaS solution** that helps schools move from *reactive crisis management* to *proactive emotional support* for students.

---

## 1. Concept Overview

### 1.1 The Problem

In many schools:

- **Students** feel stressed, lonely, or overwhelmed, but rarely reach out for help.
- **Parents** worry about their children but lack real insight into their emotional state.
- **Schools** only see problems when they become serious incidents (self-harm, conflicts, academic collapse).

There is a **“silent gap”** between what students feel and what adults can see.

### 1.2 The Solution: Aura Bot

**Aura Bot for Schools** is an AI-powered emotional wellness platform designed for school environments.

- **B2B**: Schools are the paying customers (SaaS subscription).
- **B2C**: Students and parents are end users (access through school accounts).

Key idea:

> Students chat privately with Aura Bot.  
> AI analyzes conversations **anonymously**, then schools & parents see **aggregated emotional insights**, not raw chat logs.

---

## 2. Core Features

The app has several main screens, each representing a real stakeholder in the ecosystem.

### 2.1 Student: Wellness Hub & Mood Timeline

**Screen: Student Wellness Hub**

- A safe, friendly UI for students.
- Daily recommendation, e.g.:
  - *“5-Minute Mindful Breathing”* for exam stress.
- Quick access to:
  - Articles (e.g., handling peer pressure)
  - Sleep tips
  - School counselor contact

**My Mood Timeline (Last 7 Days)**

- A line chart showing mood scores over the last week.
- Helps students build **self-awareness** of their emotional patterns.

> In a real deployment, these scores would come from Aura Bot’s analysis of student check-ins and chats.

---

### 2.2 Parent: Privacy-Respecting Insights

**Screen: Parent Dashboard**

The parent side is **not a spying tool**. It offers:

- **Weekly Emotional Trend**
  - Current week’s average mood (e.g., `7.2 / 10`)
  - Change vs last week (e.g., `+8%`)
- **Key Topics & Concerns**
  - Top topic: e.g. *Exams* — mentioned 5 times.
  - Rising concern: e.g. *Friendships* — sentiment dropping.
- **Proactive Alert**
  - E.g., “Mood has been below average for 3 days; time for a gentle check-in.”
- **Conversation Starters**
  - Example question parents can safely ask:
    > “What was the most interesting thing you learned in school this week?”

**Important:**  
Parents never see specific chat messages. They only see **trends and topics**, preserving student privacy.

---

### 2.3 School: Analytics & System Management

**Screen: School Analytics**

- Line chart of **overall mood trends** by grade (e.g., Grade 7/8/9 over 4 weeks).
- Used for:
  - Planning wellness events
  - Targeted interventions (e.g., before exam weeks)

**System Management Tabs**

- **Wellness Resources**
  - Configure which exercises and links appear in the Student Hub.
  - E.g., add breathing exercises, counselor booking link, etc.
- **Onboarding**
  - Upload student CSV
  - Generate parent invite QR codes
  - View pending invitations
- **Reports**
  - Download monthly anonymized PDF report
  - Export CSV for further analysis
  - Schedule weekly email reports to staff

**Emergency Safety Protocol Card**

This implements the **“Break-Glass Protocol”**:

- In extremely high-risk cases (self-harm / harm to others):
  - AI triggers a **high-risk alert**.
  - Notifies only the **designated safeguarding lead** in the school.
  - Sends minimal, pre-approved information for urgent intervention.
- 99.9% of the time, student data stays fully anonymous.

---

### 2.4 Business Console: SaaS & Market View

**Screen: Business Console**

This is our internal / admin view that demonstrates the **business model** of Aura Bot.

It includes:

- **SaaS Overview**
  - Active schools (e.g., 6)
  - Active students (e.g., 3,240)
  - Annual Recurring Revenue (ARR), e.g. `$18k`
  - Scenario selector (e.g., 2024 Pilot / 2025 Growth / 2026 Scale-up)
- **Pilot → Paid Conversion Chart**
  - Bar chart showing number of pilot schools vs paid schools per quarter.
- **Sales Funnel**
  - Cold Outreach → Meetings → Pilot Schools → Paid Contracts
  - Visualizes how we go from talks to contracts.
- **Pricing Tiers**
  - Pilot Program: free (one class, one semester)
  - Standard School License: tiered per-student annual pricing (e.g., ¥20–¥35/student/year)
  - District / Group License: custom pricing

This console is useful during **Demo Day** to communicate:

> Aura Bot is not only a technical prototype, but also has a clear SaaS business model and go-to-market strategy.

---

## 3. Chat Demo (for Presentation)

For the demo session, the chat is deliberately kept **simple and deterministic**:

When the student types:

1. `I'm happy with my friend`  
2. `I'm sad with my exam`  
3. `I just finish my work`

The bot will respond in a fixed sequence with:

1. A positive response focused on **social** topic (score ≈ 9)  
2. A supportive response focused on **study/exam stress** (score ≈ 3)  
3. A neutral/positive response for **work/achievement** (score ≈ 6)

These sessions are then reflected in:

- The **Emotional Insights** screen
- The **topic statistics** and **session history**

> Note: In this MVP, the responses are mocked on the frontend, but the UX flow is designed to mimic a real LLM-based system.

---

## 4. Tech Stack

- **Frontend Framework**: React
- **UI / Icons**: `lucide-react`
- **Charts & Data Visualization**: `recharts`
- **Styling**: Custom CSS (`App.css`)
- **Architecture Concept**:
  - Landing page (marketing & B2B positioning)
  - Auth (login/signup – UI only in MVP)
  - Mobile-style in-app experience for students/parents/school staff

---

## 5. How to Run Locally

### 5.1 Prerequisites

- Node.js (>= 16 recommended)
- npm or yarn

### 5.2 Installation & Start

```bash
# 1. Clone this repository
git clone https://github.com/YOUR_GITHUB_USERNAME/aura-bot-for-schools.git
cd aura-bot-for-schools

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm start
# or
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> For the course demo, we recommend running it in a browser window with mobile width to mimic a phone.

---

## 6. Recommended Demo Flow (for Presentations)

1. **Landing Page (Web view)**
   - Explain the problem and value proposition.
   - Show pricing and mission briefly.
2. **Login → Main App (Mobile view)**
   - Switch to the in-app view (student/parent/school).
3. **Chat Demo (Student)**
   - Type the three prepared sentences to show:
     - Emotional responses
     - Updated Insights
4. **Insights Screen**
   - Show average mood, topics, and session history.
5. **Student / Parent / School Screens**
   - Student: Mood timeline.
   - Parent: Privacy, topics, alerts, conversation starters.
   - School: Analytics, System Management, Break-Glass Protocol.
6. **Business Console**
   - End with the business model, funnel, and pricing.

---

## 7. Learning Outcomes (Module Link)

From the **ENT207TC Digital Startup Lab** perspective, this project demonstrates:

- **LO A / B**: Understanding and applying modern technologies (React, charts, AI concept) in a startup context.
- **LO C**: Considering emotional intelligence and resilience as core to the product’s purpose.
- **LO D**: Designing and implementing an innovative, tech-enabled solution (B2B2C SaaS for schools).
- **LO E**: Using interactive simulations and dashboards to support decision-making (for schools and parents).

---

## 8. Future Work

- Replace mocked AI calls with real LLM APIs.
- Add real authentication and role-based access control.
- Connect dashboards to a backend database for:
  - Session storage
  - Aggregated analytics
  - Real report exports
- Integrate with existing school information systems (SIS) via APIs.

---

**Contact**

For questions or collaboration, please contact the project team via:

- GitHub: YuyuanBaoEnzoBowen
- Email: Yuyuan.Bao23@student.xjtlu.edu.cn
