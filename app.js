// app.js

document.addEventListener('DOMContentLoaded', () => {
    initChat();
    initTimeline();
    initFlashcards();
    initQuiz();
});

// --- Chat Logic ---
function initChat() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserInput() {
        const text = chatInput.value.trim().toLowerCase();
        if (!text) return;

        addMessage(chatInput.value, 'user');
        chatInput.value = '';

        setTimeout(() => {
            let response = electionData.chatResponses["default"];
            for (const key in electionData.chatResponses) {
                if (text.includes(key)) {
                    response = electionData.chatResponses[key];
                    break;
                }
            }
            addMessage(response, 'bot');
        }, 500);
    }

    sendBtn.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });

    // Initial greeting
    setTimeout(() => {
        addMessage(electionData.chatResponses["hello"], 'bot');
    }, 500);
}

// --- Timeline Logic ---
function initTimeline() {
    const timelineContainer = document.getElementById('timeline-list');
    
    electionData.timeline.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('timeline-item');
        li.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-desc">${item.description}</div>
        `;
        timelineContainer.appendChild(li);
    });
}

// --- Flashcard Logic ---
let currentFlashcardIndex = 0;

function initFlashcards() {
    const flashcard = document.getElementById('flashcard');
    const frontEl = document.getElementById('flashcard-front-text');
    const backEl = document.getElementById('flashcard-back-text');
    const prevBtn = document.getElementById('prev-card');
    const nextBtn = document.getElementById('next-card');

    function updateCard() {
        flashcard.classList.remove('flipped');
        setTimeout(() => {
            frontEl.textContent = electionData.flashcards[currentFlashcardIndex].term;
            backEl.textContent = electionData.flashcards[currentFlashcardIndex].definition;
        }, 300); // Wait for unflip animation
    }

    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', () => {
        currentFlashcardIndex = (currentFlashcardIndex - 1 + electionData.flashcards.length) % electionData.flashcards.length;
        updateCard();
    });

    nextBtn.addEventListener('click', () => {
        currentFlashcardIndex = (currentFlashcardIndex + 1) % electionData.flashcards.length;
        updateCard();
    });

    updateCard();
}

// --- Quiz Logic ---
let currentQuizIndex = 0;
let score = 0;

function initQuiz() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-question');

    function loadQuestion() {
        const q = electionData.quiz[currentQuizIndex];
        questionEl.textContent = q.question;
        optionsEl.innerHTML = '';
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';

        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.classList.add('quiz-option');
            btn.textContent = opt;
            btn.addEventListener('click', () => checkAnswer(index, btn));
            optionsEl.appendChild(btn);
        });
    }

    function checkAnswer(selectedIndex, btnElement) {
        // Disable all options
        const allOptions = optionsEl.querySelectorAll('.quiz-option');
        allOptions.forEach(opt => opt.disabled = true);

        const q = electionData.quiz[currentQuizIndex];
        if (selectedIndex === q.answer) {
            btnElement.classList.add('correct');
            feedbackEl.textContent = 'Correct!';
            feedbackEl.style.color = 'var(--secondary-color)';
            score++;
        } else {
            btnElement.classList.add('incorrect');
            allOptions[q.answer].classList.add('correct');
            feedbackEl.textContent = 'Incorrect!';
            feedbackEl.style.color = '#ef4444';
        }

        nextBtn.style.display = 'block';
    }

    nextBtn.addEventListener('click', () => {
        currentQuizIndex++;
        if (currentQuizIndex < electionData.quiz.length) {
            loadQuestion();
        } else {
            questionEl.textContent = `Quiz Complete! Your score: ${score}/${electionData.quiz.length}`;
            optionsEl.innerHTML = '';
            feedbackEl.textContent = '';
            nextBtn.style.display = 'none';
        }
    });

    loadQuestion();
}
