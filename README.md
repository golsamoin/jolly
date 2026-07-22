# Jolly 🌟

> An AI-powered daily companion and assistant for seniors, connecting them with the people who care about them most.

---

## What is Jolly?

Jolly is a full-stack web application that gives older adults a warm, intelligent AI companion who knows them personally — their name, their interests, their schedule, and messages from their family.

Unlike generic AI chatbots, Jolly is set up by family members and caregivers who build the senior's profile, add daily reminders, and leave personal notes. Jolly then delivers all of this conversationally, so instead of a cold notification, a senior hears:

> *"Good morning Dorothy! Sarah wanted me to remind you she's visiting Saturday. You also have your doctor's appointment Thursday at 2pm — would you like me to remind you again closer to the time?"*

---

## The Problem

Seniors in assisted living and at home often experience:
- Social isolation and loneliness
- Missed medications and appointments
- Difficulty staying connected with distant family members
- Overwhelming or confusing technology

Jolly addresses all four — through conversation, not complexity.

---

## Features

### For Seniors
- **AI Chat Interface** — warm, patient, conversational companion available anytime
- **Personalized responses** — Jolly knows the senior's name, interests, and daily routine
- **Conversational reminders** — appointments and tasks delivered naturally, not as cold notifications
- **Family messages** — notes from loved ones woven into conversation warmly

### For Caregivers & Family (up to 3 per senior)
- **Caregiver dashboard** — manage the senior's profile, reminders, and notes
- **Leave messages** — write notes that Jolly delivers conversationally
- **Add reminders** — schedule appointments, medications, and events
- **Activity log** — see how often their loved one is engaging with Jolly

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Flask (Python) |
| Database | Firebase Firestore |
| Authentication | Firebase Auth |
| AI | Anthropic Claude API |
| Deployment | Vercel (frontend), Render (backend) |

---

## How It Works

```
Senior types a message in React
        ↓
React sends message + senior profile to Flask
        ↓
Flask builds a personalized system prompt
(name, interests, reminders, family notes)
        ↓
Flask sends to Claude API
        ↓
Claude responds as Jolly — warm, personal, informed
        ↓
Response displayed in chat interface
```

---

## Project Structure

```
jolly/
├── frontend/
│   └── jolly-frontend/
│       ├── src/
│       │   ├── App.js              — routing
│       │   └── pages/
│       │       ├── Landing.js      — home page, senior/caregiver split
│       │       ├── Senior.js       — AI chat interface
│       │       └── Caretaker.js    — caregiver dashboard
│       └── public/
└── backend/
    └── app.py                      — Flask API, Claude integration
```

---

## Running Locally

### Prerequisites
- Node.js
- Python 3
- Anthropic API key

### Frontend
```bash
cd frontend/jolly-frontend
npm install
npm start
```

### Backend
```bash
cd backend
pip3 install flask flask-cors anthropic python-dotenv
```

Create a `.env` file in the `backend` folder:
```
ANTHROPIC_API_KEY=your_key_here
```

Then run:
```bash
python3 app.py
```

Open [http://localhost:3000](http://localhost:3000)

---

## Research

This project is accompanied by independent research into AI engagement patterns for older adults — investigating whether conversational AI that integrates reminders and family connection improves daily routine adherence and reduces social isolation compared to standard reminder systems.

Findings from this research directly inform Jolly's design decisions around tone, memory, and proactive engagement.

---

## Recognition

- 🏆 **On the Horizon Innovation Award** — Transcend UW-Madison (2025)

---

## Roadmap

- [ ] Firebase authentication and real user profiles
- [ ] Caregiver dashboard with full reminder and note management
- [ ] Mobile app (React Native)
- [ ] Voice interface for seniors who prefer speaking
- [ ] Apple Watch / wearable integration for health monitoring
- [ ] Assisted living facility enterprise dashboard

---

## Built By

**Golsa Moinshaghaghi**  
B.S. Computer Science & Data Science, University of Wisconsin-Madison  
github.com/golsamoin
