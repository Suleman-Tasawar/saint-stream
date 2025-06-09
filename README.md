# 🎬 Saint Stream – Stream Movies and Series

**Saint Stream** is a full-featured movie and series streaming platform built with **React**, **TypeScript**, and **Vite**. It allows users to explore popular movies and series, view detailed overviews, stream selected content, and save items to a watch later list — all with an intuitive and responsive UI.

---

## 🚀 Features

### 🎥 Movie & Series Browsing

* Browse the latest **movies** and **TV series** using data from [The Movie Database (TMDb)](https://www.themoviedb.org/).
* View detailed overviews, ratings, release dates, and categories.

### 🔐 User Authentication

* Login and register securely.
* Session persistence using tokens or browser storage.
* Personalized experience for each user.

### 📺 Streaming Support

* Direct access to streaming previews or trailers (if available).
* Clean and immersive viewing experience.

### 🕓 Watch Later List

* Add movies or shows to a personal **watch later** list.
* Persistent list across sessions after login.

### 📊 Categorized Sections

* Just Released
* Popular of the Week
* Trending Movies
* Trending Series

---

## 🛠️ Built With

* **React** – UI Library
* **TypeScript** – Type Safety
* **Vite** – Next-generation frontend tooling
* **Tailwind CSS** – Utility-first styling
* **TMDb API** – Movie and TV show data
* **React Router** – Client-side routing
* **Custom Hooks & API Services** – Clean data fetching
* **State Management** – `useState`, `useEffect`
* **Authentication** – (Appwrite)

---

## 🧩 Project Structure

```
src/
│
├── components/        # Reusable components like Hero, Carousels, Buttons
├── routes/            # Page components (Home, Login, Register, Details)
├── utlis/api/         # API utility functions (movieApi.ts) 
└── main.tsx           # Application entry point
```

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Suleman-Tasawar/saint-stream.git
cd movieverse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_AUTHORIZATION_BEARER_KEY=your_tmdb_bearer_token
```

You can get these keys from [TMDb Developer Settings](https://www.themoviedb.org/settings/api).

### 4. Run the App

```bash
npm run dev
```

---

## ✅ Deployment

You can deploy this app to:

* **Vercel**
* **Netlify**

Just make sure to add your `.env` variables in the host environment settings.

---


## 🤝 Acknowledgements

* [TMDb API](https://www.themoviedb.org/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)
