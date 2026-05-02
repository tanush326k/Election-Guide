const electionData = {
    timeline: [
        { title: "Announcement", date: "March 16, 2024", description: "Election Commission of India (ECI) announces the election schedule. Model Code of Conduct comes into effect." },
        { title: "Preparation", date: "March - April 2024", description: "ECI mobilizes personnel. EVMs and VVPATs are prepared and tested." },
        { title: "Polling Phases", date: "April 19 - June 1, 2024", description: "Voting takes place in 7 staggered phases across the country." },
        { title: "Counting", date: "June 4, 2024", description: "Votes are tabulated and results are declared for the 543 Lok Sabha seats." },
        { title: "Government Formation", date: "June 2024", description: "The President invites the majority party/coalition to form the government." }
    ],
    flashcards: [
        { term: "EVM", definition: "Electronic Voting Machine: Used for casting votes electronically." },
        { term: "VVPAT", definition: "Voter Verifiable Paper Audit Trail: Provides feedback to voters using a slip to verify their vote." },
        { term: "Lok Sabha", definition: "The lower house of India's bicameral Parliament." },
        { term: "ECI", definition: "Election Commission of India: The autonomous constitutional authority responsible for administering election processes in India." },
        { term: "Model Code of Conduct", definition: "Guidelines issued by the ECI for conduct of political parties and candidates during elections." }
    ],
    quiz: [
        {
            question: "Who oversees the election process in India?",
            options: ["The Prime Minister", "The Supreme Court", "Election Commission of India", "The President"],
            answer: 2
        },
        {
            question: "How many phases were there in the 2024 Indian General Elections?",
            options: ["3", "5", "7", "9"],
            answer: 2
        },
        {
            question: "What is the purpose of a VVPAT?",
            options: ["To count votes faster", "To verify the casted vote with a paper slip", "To register new voters", "To announce results"],
            answer: 1
        }
    ],
    chatResponses: {
        "hello": "Hello! I am your Indian Election Assistant. You can ask me about the 'process', 'timeline', 'EVM', or say 'start guide' to go through the steps.",
        "hi": "Hi there! I can help you understand the Indian election process. Try asking about the 'timeline' or type 'start guide'.",
        "process": "The Indian election process generally involves: 1. Announcement & Model Code of Conduct, 2. Candidate Nomination, 3. Campaigning, 4. Polling Day (Voting), 5. Counting of Votes, and 6. Government Formation.",
        "timeline": "The 2024 elections were held in 7 phases from April 19 to June 1, with counting on June 4.",
        "evm": "EVM stands for Electronic Voting Machine. It's used by voters to cast their vote by pressing a button next to their chosen candidate.",
        "start guide": "Great! Let's start the guide. Step 1: Check your name on the voter list (Electoral Roll). Have you done that? (Reply 'yes' or 'no')",
        "yes": "Awesome! Step 2: On voting day, go to your designated polling booth with a valid ID card (like Voter ID or Aadhaar). Once inside, polling officials will verify your identity. Ready for Step 3? (Reply 'ready')",
        "no": "No problem! You can check it online on the National Voters' Services Portal (NVSP). Once you are on the list, you are ready for polling day!",
        "ready": "Step 3: Your index finger will be marked with indelible ink. Then, you'll go to the voting compartment, press the button on the EVM next to your candidate, and check the VVPAT slip to verify your vote. That's it! You've voted.",
        "default": "I'm still learning! You can ask me about the 'timeline', 'process', 'EVM', or type 'start guide' for a step-by-step walkthrough."
    }
};
