# 🏛️ Sanskriti — Heritage & Living Culture Platform

[![Smart India Hackathon](https://img.shields.io/badge/Smart%20India%20Hackathon-SIH-orange.svg?style=for-the-badge)](https://www.sih.gov.in/)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38b2ac.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **A digital gateway celebrating, preserving, and experiencing the tangible and intangible heritage of Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.**

---

## 📌 Table of Contents

1. [About The Project](#-about-the-project)
2. [How the Website Works (Simple Explanation)](#-how-the-website-works-simple-explanation)
3. [The Backend Architecture Explained](#-the-backend-architecture-explained)
4. [Key Features in Detail](#-key-features-in-detail)
5. [Data Models & Schema](#-data-models--schema)
6. [Tech Stack](#-tech-stack)
7. [Project Directory Structure](#-project-directory-structure)
8. [Getting Started (Run Locally)](#-getting-started-run-locally)
9. [Future Roadmap (Cloud Backend Expansion)](#-future-roadmap-cloud-backend-expansion)
10. [Authors & Acknowledgments](#-authors--acknowledgments)

---

## 📖 About The Project

**Sanskriti** is an interactive, accessibility-first heritage portal built for the **Smart India Hackathon (SIH)**. 

While popular tourist portals only provide static travel tickets and hotel links, **Sanskriti focuses on the cultural soul of India**:
- **Tangible Heritage**: The rock-cut engineering of **Ellora Caves (Kailasa Temple)**, **Ajanta Caves**, the invincible defense systems of **Daulatabad Fort**, and the Mughal elegance of **Bibi Ka Maqbara**.
- **Intangible Heritage**: Centuries-old oral legends, traditional craftsmanship (**Himroo Weaving**, **Bidriware metal craft**, **Paithani silk**), Sufi traditions, and regional culinary secrets.
- **Citizen Heritage Conservation**: A community-driven **Heritage Watch** system that empowers visitors and locals to report monument damage, graffiti, or path blockage with tracking IDs assigned directly to authorities (ASI / MTDC / Municipal Corporation).
- **Inclusivity & Education**: Multilingual audio narrations (English, Hindi, Marathi), zero-network offline packs, and gamified history quests for school students.

---

## 🔍 How the Website Works (Simple Explanation)

Think of Sanskriti like an **interactive digital museum guide and travel companion** right inside your browser:

```
                      ┌──────────────────────────────────────┐
                      │          Sanskriti Web Portal         │
                      └──────────────────┬───────────────────┘
                                         │
       ┌──────────────────┬──────────────┼──────────────┬──────────────────┐
       ▼                  ▼              ▼              ▼                  ▼
┌──────────────┐   ┌─────────────┐ ┌───────────┐ ┌──────────────┐   ┌─────────────┐
│ Explore Map  │   │ Oral Stories│ │ Artisans  │ │Heritage Watch│   │ School Mode │
│ & Trails     │   │ & Audio TTS │ │ & Guides  │ │(Incident Log)│   │ & Badges    │
└──────┬───────┘   └──────┬──────┘ └─────┬─────┘ └──────┬───────┘   └──────┬──────┘
       │                  │              │              │                  │
       └──────────────────┴──────────────┼──────────────┴──────────────────┘
                                         ▼
                      ┌──────────────────────────────────────┐
                      │    Sanskriti Central State Engine    │
                      │         (React Context API)          │
                      └──────────────────┬───────────────────┘
                                         │
                      ┌──────────────────┴───────────────────┐
                      │ Persistent Storage & Browser Engines │
                      │  • LocalStorage (Reports, Itinerary) │
                      │  • Web Speech API (Multilingual TTS) │
                      │  • Network State / Offline Packs     │
                      └──────────────────────────────────────┘
```

1. **Browsing & Discovering**:
   - The user opens the home page or interactive map to view heritage monuments plotted by geographic coordinates.
   - Filter by UNESCO World Heritage sites, hill forts, sacred shrines, hidden gems, or distance.

2. **Multilingual Audio Narrations**:
   - Every destination and folk story has integrated multilingual scripts in **English, Hindi, and Marathi**.
   - With one click on the speaker icon, the site reads out the story using the browser's speech synthesis engine, adjusting playback speed and language pitch on the fly.

3. **Planning Your Day (Smart Itinerary)**:
   - As visitors browse monuments, they click **"Add to Itinerary"**.
   - The built-in day planner calculates a suggested schedule with optimal visit hours and durations, which can be viewed in a drawer and saved offline.

4. **Preserving Monuments (Heritage Watch)**:
   - A visitor spots structural cracks, litter, graffiti, or a broken pathway at a monument.
   - They open the **Heritage Watch** tab, select the monument, pick the problem category, add notes, and upload a photo.
   - The platform generates a unique ticket ID (e.g. `SKT-HW-1043`), maps it to the responsible custodian (e.g. Archaeological Survey of India), and records it in the live public issue dashboard.

5. **Empowering Local Artisans**:
   - Visitors can discover real GI-tagged handicraft master weavers (Himroo, Bidriware, Paithani) and verified local guides, viewing workshop addresses, experience stories, and inquiry details.

6. **Offline Packs for Remote Cave Networks**:
   - Deep inside cave complexes like Ajanta or Ellora, mobile network connectivity is often zero.
   - Users can download comprehensive **Offline Packs** beforehand, allowing full access to monument maps, historical details, and emergency helpline numbers without an active internet connection.

---

## ⚙️ The Backend Architecture Explained

### Is there a backend? How does data work without an expensive server?

In modern web engineering, applications can implement **Client-Side Backend Architecture (Local-First Architecture)**. Sanskriti is designed to be **ultra-fast, serverless-ready, and resilient offline**:

### 1. The Central Controller (`SanskritiContext.tsx`)
In a traditional server architecture, a controller receives requests and updates the database. In Sanskriti, the **`SanskritiProvider`** acts as this controller:
- Manages global application state (active route, active modal, audio playback status, downloaded packs).
- Handles incoming actions: `submitReport()`, `addToItinerary()`, `downloadPack()`, `answerQuest()`, and `submitCommunityEvent()`.
- Dispatches state updates uniformly to all UI components.

### 2. The Persistent Local Database (`localStorage` & `sessionStorage`)
Instead of forcing users to sign up and wait for database roundtrips, the application uses browser-level persistent stores:
- **`sanskriti_reports`**: Stores newly filed citizen heritage issues, incident photos, status updates (`Reported` ➔ `Seen` ➔ `Action in Progress` ➔ `Fixed`), and custodian routing.
- **`sanskriti_itinerary`**: Stores user-selected travel destinations, scheduled timings, and personal trip notes.
- **`sanskriti_offline_packs`**: Tracks which monument guide bundles are saved for offline use.
- **`sanskriti_badges` & `sanskriti_quests`**: Records student learning progress and earned digital badges.
- **`sanskriti_a11y`**: Persists user accessibility preferences (high-contrast mode, reduced motion, custom font scale).

### 3. Native Browser Service Engines
- **Speech Synthesis Engine (`window.speechSynthesis`)**:
  - Functions as a client-side voice generation microservice.
  - Automatically detects and binds native Indian language voice packs (`mr-IN` for Marathi, `hi-IN` for Hindi, `en-IN` for Indian English).
- **Network Status Observer (`navigator.onLine`)**:
  - Listens to browser network transitions (`online` / `offline` events).
  - Includes a built-in **"Simulate Offline Mode"** switch to test how tourists experience the app in zero-connectivity cave environments.
- **Geographic Projection Engine (`InteractiveMap.tsx`)**:
  - Converts real GPS coordinates (Latitude: ~19.85°–20.58°N, Longitude: ~75.15°–75.72°E) into 2D canvas coordinates without requiring third-party paid map tile servers.

---

## ✨ Key Features in Detail

| Feature | Description |
| :--- | :--- |
| 🗺️ **Interactive Heritage Map** | Visual map covering the Chhatrapati Sambhajinagar district with category markers, interactive cards, and coordinates. |
| 📜 **Oral Traditions & Lore** | Documented folk legends, Mughal & Maratha historical chronicles, and Buddhist art history. |
| 🔊 **Multilingual Voice Guide** | Integrated text-to-speech reader delivering audio in English, Hindi, and Marathi with speed control. |
| 🛡️ **Heritage Watch Portal** | Citizen incident reporting tool with issue classification, photo previews, ticket generation, and custodian routing. |
| 🪡 **Living Heritage Directory** | Showcase of traditional craft artisans (Himroo, Bidri, Paithani) and government-certified tour guides. |
| 🎒 **Gamified School Mode** | Interactive history challenges and quizzes tailored for students with collectible badge rewards. |
| 🗓️ **Community Cultural Calendar** | Real-time directory of local festivals, urs celebrations, and fairs with a community event submission portal. |
| 📦 **Offline Heritage Packs** | Low-bandwidth guides designed for offline usage in remote areas, complete with emergency contacts. |
| ♿ **Accessibility Suite** | Adjustable font sizing (`sm`, `md`, `lg`, `xl`), WCAG high-contrast mode, reduced motion, and step-free route filters. |

---

## 🗄️ Data Models & Schema

The data layer is strongly typed with TypeScript interfaces in [`src/types/index.ts`](src/types/index.ts):

- **`Destination`**: Detailed metadata including GPS coordinates, architectural significance, UNESCO status, audio scripts (EN, HI, MR), accessibility ratings (wheelchair, step-free, terrain), and visiting tips.
- **`Story`**: Oral legends, reading time, historical context, narrative chapters, and multilingual audio transcripts.
- **`HeritageReport`**: Citizen reports containing ticket ID, timestamp, destination reference, problem category, status, and suggested custodian authority.
- **`ArtisanProfile` & `GuideProfile`**: Craft types, workshop locations, bio narratives, pricing indicators, and contact workflows.
- **`SchoolQuest`**: Multiple-choice trivia questions, educational explanations, and associated badge achievements.

---

## 💻 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling & Design System**: [Tailwind CSS](https://tailwindcss.com/) with custom heritage color tokens:
  - Terracotta (`#C85A32`), Saffron (`#E28743`), Deep Olive (`#4A5844`), Warm Cream (`#F3E5CC`), Gold (`#B59A70`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Great Vibes*, *Plus Jakarta Sans*)
- **Code Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Directory Structure

```text
SIH/
├── public/                 # Static assets, logos, and favicons
├── src/
│   ├── assets/             # Vector icons, illustrations, and hero graphics
│   ├── components/
│   │   ├── common/         # Navbar, Footer, DestinationCard, Heritage decorative icons
│   │   ├── explore/        # InteractiveMap canvas component
│   │   └── modals/         # Destination details, Itinerary drawer, Search,
│   │                       # Accessibility modal, Story modal, Event submit modal
│   ├── context/            # SanskritiContext (Central state management & persistence)
│   ├── data/               # Rich structured cultural datasets
│   │   ├── places.ts       # 12+ Monument profiles with GPS, audio, & accessibility info
│   │   ├── stories.ts      # Folklore, oral histories, and legends
│   │   ├── events.ts       # Festivals, fairs, and community cultural gatherings
│   │   ├── heritageWatch.ts# Problem taxonomies, custodian map, initial reports
│   │   ├── livingHeritage.ts# Artisan workshops & registered tour guides
│   │   ├── offlinePacks.ts # Bundled offline packs & emergency contacts
│   │   ├── schoolQuests.ts # Interactive quiz questions & badge metadata
│   │   └── trails.ts       # Curated thematic travel circuits
│   ├── pages/              # Primary view pages (Home, Explore, Stories, Speciality,
│   │                       # Living Heritage, Heritage Watch, Offline Packs, School Mode, About)
│   ├── types/              # TypeScript interfaces and type definitions
│   ├── App.tsx             # Root application orchestrator
│   ├── main.tsx            # React DOM entrypoint
│   └── index.css           # Global typography, theme tokens, and Tailwind directives
├── package.json            # Node.js dependencies and build scripts
├── tailwind.config.js      # Custom theme colors and heritage fonts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started (Run Locally)

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nronit28/SIH.git
   cd SIH
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production-ready bundle will be generated inside the `dist/` directory.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🔮 Future Roadmap (Cloud Backend Expansion)

While Sanskriti is fully functional as a high-speed progressive web app, the following scalable cloud microservices are architected for Phase 2 government deployment:

```mermaid
flowchart LR
    Client["Sanskriti Web / Mobile PWA"] --> API["Node.js / FastAPI Gateway"]
    API --> DB[("PostgreSQL + PostGIS (Geospatial)")]
    API --> S3["AWS S3 / Cloudflare R2 (Incident Photos)")]
    API --> Push["Twilio / WhatsApp Alert Webhook"]
    Push --> Authorities["ASI & Municipal Officers"]
```

1. **Cloud Database (PostgreSQL + PostGIS)**:
   - Store real-time geo-located reports and historical repair audit logs.
2. **Media Storage (AWS S3 / Cloudflare R2)**:
   - Direct image upload pipeline with automatic EXIF GPS validation to prevent fake incident submissions.
3. **Automated Custodian Webhooks**:
   - Immediate SMS/WhatsApp notification to local Archaeological Survey of India (ASI) site managers whenever an urgent issue (e.g. wall crack) is submitted.
4. **AR / 3D Photogrammetry View**:
   - WebXR view to inspect 3D models of cave sculptures and architecture directly in mobile browsers.

---

## 👥 Authors & Acknowledgments

- **Developed by**: Ronit Nandane & Team for the **Smart India Hackathon (SIH)**.
- **Inspiration**: The timeless culture, artisans, and stone-carved heritage of **Chhatrapati Sambhajinagar, Maharashtra**.
- **Data References**: Archaeological Survey of India (ASI), Maharashtra Tourism Development Corporation (MTDC), and local craft guilds.

---

<p align="center">
  <b>Built with ❤️ for Indian Culture & Heritage Preservation</b>
</p>
