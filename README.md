<div align="center">
  <br />
    <a href="https://youtu.be/dGHFV_RMGag" target="_blank">
      <img src="https://i.postimg.cc/tJsYLQcP/test1.jpg" alt="Project Banner">
    </a>
  
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">PennySmart</h3>

   <div align="center">
    AI Personal Finance Assistant with Expense Tracking, Budget Planning, and Personalised Financial Insights.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1.  [About](#about)
2.  [Tech Stack](#tech-stack)
3.  [Features](#features)
4.  [Quick Start](#quick-start)
 


## <a name="about">About</a>

PennySmart is the AI personal financial assistant you most certainly need. It helps you track your spending, stick to your budgets, set and reach your financial goals, as well as get personalized insights to help you make better financial decisions.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- Google GEMINI-AI API
- Tailwind CSS
- Shadcn-ui

## <a name="features">Features</a>

-  **Income and Expense Input**: Allows users to input their income and expenses.

- **Budget Management**: Enables users to manage their budgets effectively.

- **Personalized Financial Advice**: Provides detailed financial advice based on user-specific financial data using OpenAI's GPT-4 model.

- **Data Visualisation and Metrics**: Provides various financial metrics like total income, expenses, budget amount and also provides an Interactive Chart for better visualisation of users Financial Data.

## <a name="quick-start"> Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/mendsalbert/ai-finance-trackingt.git
cd ai-finance-tracking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

NEXT_PUBLIC_GOOGLE_GEMINIAI_API_KEY= 
NEXT_PUBLIC_DATABASE_URL=

```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



