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

The project is built using a lightweight and efficient frontend architecture:

- **Frontend**: HTML5, CSS3 (Glassmorphism, Custom Variables, Animations), JavaScript (ES6+)
- **Architecture**: Modular client-side design with separated logic and data layers
- **Deployment**: Containerized using Docker and deployed via Google Cloud Run

---

## 🧠 Architecture & Data Flow

Below is a diagram illustrating the component structure and internal data flow of the application.

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
