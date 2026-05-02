# 🗳️ Indian Election Assistant

An interactive, educational web application designed to simplify and visualize the Indian election process. It helps users understand key electoral concepts, timelines, and procedures through engaging UI components such as timelines, flashcards, quizzes, and a chatbot-style assistant.

---

## 🚀 Key Highlights

- 📊 Interactive timeline of the election process  
- 🧠 Flashcards for learning key electoral terms  
- 🧪 Quiz system to test knowledge  
- 🤖 Chat assistant for guided learning experience  
- 🎨 Modern UI with glassmorphism and smooth animations  
- ⚡ Lightweight, fast, and fully browser-based  

---

## ✨ Features

### 🗓️ Interactive Timeline
A step-by-step visual representation of the Indian General Election process, from announcement to government formation.

### 🧠 Flashcards System
Interactive flip cards designed to help users memorize important terms like EVM, VVPAT, Lok Sabha, and the Model Code of Conduct.

### 🧪 Knowledge Quiz
A multiple-choice quiz module that evaluates user understanding of the election process in an engaging way.

### 🤖 Chat Assistant
A simulated conversational assistant that helps users learn voting procedures and basic election-related concepts.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Glassmorphism, Custom Variables, Animations), JavaScript (ES6+)  
- **Architecture**: Modular client-side design with separated logic and data layers  
- **Deployment**: Containerized using Docker and deployed via Google Cloud Run  

---

## 🧠 Architecture & Data Flow

```## 🧠 Architecture & Data Flow

```mermaid
graph TD
    A[index.html] -->|Loads UI Structure| B(DOM Elements)

    C[styles.css] -->|Applies Glassmorphism & Theme| B

    D[data.js] -->|Provides Content| E[app.js]

    E -->|Renders Timeline Data| F[Timeline Section]
    E -->|Handles Flip Logic| G[Flashcards Section]
    E -->|Validates Answers| H[Quiz Section]
    E -->|Processes Queries| I[Chat Assistant]

    B --- F
    B --- G
    B --- H
    B --- I
## 💻 How to Run Locally

### 1. Clone the repository
```bash id="c1g8qp"
git clone https://github.com/tanush326k/Election-Guide.git

## 🚀 Deployment (Google Cloud Run)

To deploy this project on Google Cloud Run:

### 1. Install Google Cloud SDK
Ensure the Google Cloud SDK is installed and configured.

---

### 2. Authenticate
```bash id="a1m9qp"
gcloud auth login

3. Deploy the application
gcloud run deploy election-assistant --source . --region us-central1 --allow-unauthenticated --port 80

80
📜 License

MIT License

Copyright (c) 2026 Tanush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

🎯 Project Goal

This project aims to improve civic awareness by making election education interactive, visual, and easy to understand for all users.
