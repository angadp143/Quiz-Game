const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
        answer: 1
    },
    {
        question: "Which Indian festival is known as the festival of lights?",
        options: ["Holi", "Diwali", "Eid", "Navratri"],
        answer: 1
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Indira Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        answer: 2
    },
    {
        question: "Which river is known as the 'Ganga of the South'?",
        options: ["Cauvery", "Narmada", "Godavari", "Krishna"],
        answer: 0
    },
    {
        question: "In which year did India gain independence?",
        options: ["1947", "1950", "1942", "1935"],
        answer: 0
    },
    {
        question: "Which city is known as the Silicon Valley of India?",
        options: ["Pune", "Hyderabad", "Bangalore", "Chennai"],
        answer: 2
    },
    {
        question: "Who wrote the Indian national anthem?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Swami Vivekananda", "Mahatma Gandhi"],
        answer: 1
    },
    {
        question: "What is the national animal of India?",
        options: ["Elephant", "Lion", "Tiger", "Leopard"],
        answer: 2
    },
    {
        question: "Which state is known as the 'Land of Five Rivers'?",
        options: ["Punjab", "Haryana", "Rajasthan", "Bihar"],
        answer: 0
    },
    {
        question: "Which dance form originates from Kerala?",
        options: ["Kathakali", "Bharatanatyam", "Odissi", "Manipuri"],
        answer: 0
    },
    {
        question: "Which monument is known as the symbol of love in India?",
        options: ["Qutub Minar", "Taj Mahal", "Red Fort", "India Gate"],
        answer: 1
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');

    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = '';

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        document.getElementById('result-message').textContent = "Correct! 🎉";
    } else {
        document.getElementById('result-message').textContent = "Wrong Answer! ❌";
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        document.getElementById('quiz').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
    }
}

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
