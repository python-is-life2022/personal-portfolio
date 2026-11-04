# 👨‍💻 Amir Mostafa Kharazi | Personal Portfolio

<div align="center">

### Web Developer • AI Enthusiast • Machine Learning Developer

A modern and responsive personal portfolio website showcasing my projects, technical skills, and journey in **Web Development** and **Artificial Intelligence**.

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🚀 About The Project

This repository contains the source code for my personal portfolio website.

The website is designed to showcase:

- 💻 My Web Development projects
- 🤖 Artificial Intelligence and Machine Learning projects
- 🧠 Technical skills and technologies
- 📂 Featured GitHub repositories
- 📬 Contact and social media links

The design follows a modern **dark and neon-inspired UI**, with interactive animations and a responsive layout.

---

## ✨ Features

- 🎨 Modern dark/neon user interface
- 📱 Fully responsive design
- 🧠 Animated neural network background
- ✨ Smooth reveal animations
- 🧭 Interactive navigation
- 🔎 Project filtering system
- ⚡ Lightweight and fast
- 🌐 Built with pure HTML, CSS, and JavaScript

---

## 🛠️ Technologies Used

<div align="center">

| Technology | Purpose |
|---|---|
| 🌐 HTML5 | Website Structure |
| 🎨 CSS3 | Styling & Responsive Design |
| ⚡ JavaScript | Interactions & Animations |

</div>

---

## 📁 Project Structure

```text
personal-portfolio/
│
├── assets/
│   └── images/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```
## 🧠 Website Sections

The portfolio includes the following sections:

* 🏠 Home
* 👨‍💻 About Me
* 🛠️ Skills
* 📂 Projects
* 📬 Contact

## 📬 Contact form backend

The contact form uses the `submit-project` Supabase Edge Function at
`https://<project-ref>.supabase.co/functions/v1/submit-project`. Set the project
URL and publishable key in `js/contact.js`. The publishable key is intended to
be public; never put a Supabase secret/service-role key in the website files.

Before enabling the form:

1. Create a Cloudflare Turnstile widget for `amirmostafakharazi.com` and
   `www.amirmostafakharazi.com` (Cloudflare DNS/proxy is not required) and
   replace `REPLACE_WITH_TURNSTILE_SITE_KEY` in the `turnstile-site-key` meta
   tag in `contact.html`.
2. Set the following secrets in the Supabase Edge Function secrets dashboard.
   Generate `RATE_LIMIT_HASH_SECRET` as a random secret of at least 32 bytes.
   Do not commit any of these values:

- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `EMAIL_FROM` (a verified Resend sender, for example `Portfolio <onboarding@your-domain.com>`)
- `TURNSTILE_SECRET_KEY`
- `RATE_LIMIT_HASH_SECRET`

3. Apply the migrations in `supabase/migrations` and deploy
   `supabase/functions/submit-project` with `supabase/config.toml`. The function
   verifies Turnstile tokens, accepts requests only from the production origin,
   limits request size, and rate-limits each IP to 5 submissions per 15 minutes
   and each email address to 3 per 24 hours.

The function stores submissions in `project_messages` and sends them to
`amirmostafakh@gmail.com`. GitHub Pages does not support custom HTTP security
headers; the site includes a restrictive Content Security Policy and referrer
policy as HTML metadata, but response-only headers such as HSTS and
`X-Content-Type-Options` must be configured at a hosting provider that supports
them.
