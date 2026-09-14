# ResellerHub — Multi-Vendor Reseller Platform

A portfolio-grade reseller and multi-vendor commerce platform built with **Next.js, React, TypeScript and Supabase-ready architecture**.

## 🎯 Project Goal

ResellerHub is designed to demonstrate how a modern reseller marketplace can be structured from the frontend through the backend/data layer. The project focuses on clean UI, scalable architecture and practical commerce workflows.

## ✨ Current Highlights

- Modern responsive landing/storefront experience
- Reseller-focused marketplace concept
- Next.js App Router structure
- TypeScript-based application code
- Supabase/PostgreSQL-ready architecture
- Clear separation between UI, data and API responsibilities
- Mobile-responsive design
- Professional project documentation

## 🧰 Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Styling | CSS / Tailwind CSS-ready |
| Backend / Data | Supabase, PostgreSQL |
| API | REST API architecture |
| Version Control | Git, GitHub |

## 📁 Project Structure

```text
reseller-platfrom/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🚀 Run Locally
<img width="1919" height="954" alt="Screenshot 2026-09-14 202944" src="https://github.com/user-attachments/assets/307808c7-ff44-4574-9e19-d999e0f7cd55" />
<img width="1918" height="933" alt="Screenshot 2026-09-14 202934" src="https://github.com/user-attachments/assets/51607543-2bea-43cb-87d4-6e277297a928" />
<img width="1901" height="937" alt="Screenshot 2026-09-14 202648" src="https://github.com/user-attachments/assets/329f5c1f-810c-46cf-b40c-746316d11ede" />

### 1. Clone

```bash
git clone https://github.com/SheikhNazmul/reseller-platfrom.git
cd reseller-platfrom
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 4. Production build

```bash
npm run build
npm start
```

## 🔐 Environment Variables

When Supabase functionality is connected, create `.env.local` and add your project credentials. Never commit secrets to GitHub.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🗺️ Planned Features

- User and reseller authentication
- Product catalog and categories
- Seller/reseller dashboard
- Inventory management
- Cart and order management
- Commission and reseller pricing logic
- Payment integration
- Admin dashboard
- Order status tracking
- Analytics and reporting

## 👨‍💻 Author

**Sheikh Nazmul Islam NIR**

- GitHub: https://github.com/SheikhNazmul
- Portfolio: https://sheikhnazmul.github.io/portfolio/

## 📌 Portfolio Note

This repository is maintained as a practical full-stack portfolio project to demonstrate modern web development, database integration and scalable product architecture.
