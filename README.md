# 🚀 HTMF – Hackathon Teammate Finder

HTMF (Hackathon Teammate Finder) is a web platform designed to help students find suitable teammates for hackathons based on skills, interests, and experience. It enables collaboration across campuses and simplifies team formation.

🌐 **Live Website:** https://htmf-eight.vercel.app/
📁 **GitHub Repository:** https://github.com/sachin-yadavv/HTMF

---

## ✨ Features

- 🔐 User Authentication using Firebase (Email & Password)
- 👤 User Profiles with skills and experience
- 🏆 Hackathon Listings
- 👥 Team creation and joining
- 🔔 Notifications system
- ☁️ Firebase Firestore & Storage
- ⚡ Fast performance with Vite
- 🌍 Deployed on Vercel

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion  
- **Backend / Services:** Firebase Authentication, Firestore, Storage  
- **Deployment:** Vercel

---

## 📂 Project Structure

```
HTMF/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   │   └── firebase/
│   ├── pages/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

⚠️ **Do not commit the `.env` file to GitHub.**

---

## ▶️ Run Locally

```bash
git clone https://github.com/sachin-yadavv/HTMF.git
cd HTMF
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🚀 Deployment

The project is deployed on Vercel.

Every push to the main branch triggers an automatic deployment.

---

## 👨‍💻 Author

**Sachin Yadav**

---

⭐ If you like this project, don't forget to star the repository!
