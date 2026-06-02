# 🌐 Modern Developer Portfolio | Mohammed Musharraf

A beautiful, premium, responsive developer portfolio showcasing professional experience, enterprise projects, technical skills, and achievements. Fully optimized for production, featuring a custom dark/light theme engine, animated metric dashboards, and secure email forwarding.

✨ **Live Site**: [Deployed on Netlify](https://mywebsite.com) *(Replace with your deployed Netlify URL)*

---

## 🚀 Features

*   **🌓 Dynamic Light & Dark Modes**: Responsive theme-toggling system (floating pill switcher) powered by Tailwind CSS v4 custom variants with persistent user choice in `localStorage`.
*   **📈 Interactive Metrics Dashboard**: 5-column metric cards showing key career data (Years Experience, Enterprise Projects, API Uptime, Tools) with a smooth count-up initialization animation.
*   **👀 Global Profile Visitor Counter**: Dynamic hit tracker integration utilizing CounterAPI to fetch and sync global website page views, with local browser storage fallbacks.
*   **🛠️ Interactive Contact Form**: Fully validated form featuring name, email check, loading indicators, error boundaries, and custom Framer Motion success checkmark animations, powered by **Web3Forms** for zero-server email forwarding.
*   **📜 Direct Resume Download**: Immediate download mechanism in navigation bar pointing directly to `public/Mohammed Musharraf Resume.pdf`.
*   **🎓 Horizontal Experience & Education Timelines**: Minimalist horizontal timelines tracking employment and educational progression cleanly on desktop and scroll-swipeable on mobile.
*   **⚡ visual & Interactive Polish**: Translucent glassmorphism cards, micro-animations, theme-sensitive gradients, and typography designed for a high-end recruiter experience.

---

## 💻 Tech Stack

*   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, React 19)
*   **Languages**: [TypeScript](https://www.typescriptlang.org/), [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configurations, utility classes)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Transitions, slide-overs, checkmark paths)
*   **APIs & Services**: [Web3Forms](https://web3forms.com/) (Forms forwarding), [CounterAPI](https://counterapi.dev/) (Visitor tracking)

---

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/mdmusharaf0305-wq/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your site.

---

## 🏗️ Production Build

To verify code cleanliness and optimize static generation:
```bash
npm run build
```
This outputs a fully optimized standalone static bundle inside the `.next` directory.

---

## 🌐 Deployment to Netlify (CI/CD Pipeline)

This project is configured for continuous integration/deployment using GitHub and Netlify.

### Step 1: Push Changes
Ensure all latest features are committed and pushed:
```bash
git add .
git commit -m "feat: complete portfolio refresh and features setup"
git push origin main
```

### Step 2: Add Environment Variables to Netlify
1. Go to your **Netlify Dashboard** -> select your site -> **Site configuration** -> **Build & deploy** -> **Environment variables**.
2. Click **Add a variable** -> **Add single variable**.
3. Create the variable:
    *   **Key**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
    *   **Value**: `your_web3forms_access_key_here`
4. Click **Save**.

### Step 3: Redeploy
Under the **Deploys** tab, click **Trigger deploy** -> **Clear cache and deploy site** to rebuild your site containing your public key.

---

## 📂 Project Structure

```
Portfolio/
├── public/                 # Static assets (Resume PDF, images, certificates)
├── src/
│   └── app/
│       ├── components/     # Reusable React components (Navbar, Header, ContactForm)
│       ├── globals.css     # Global styles & Tailwind variable declarations
│       ├── layout.tsx      # Main application frame layout
│       └── page.tsx        # Main homepage routing configuration
├── .env.local              # Local environment properties (ignored by Git)
├── package.json            # Scripts & dependencies
└── tsconfig.json           # TypeScript configuration
```
