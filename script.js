// Your quiz questions and answers here
const quizData = [
    {
        question: "তোমার প্রিয় পাঠ্য বিষয় ",
        options: [
            { text: "১. বিজ্ঞান", score: 10 },
            { text: "২. সাহিত্য", score: 10 },
            { text: "৩. ইতিহাস", score: 10 },
            { text: "৪. কোনটিই নয়", score: -5 }
        ]
    },
    {
        question: "তোমার শারীরিক সামর্থ্য ",
        options: [
            { text: "অত্যন্ত শক্তিশালী", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কিছুটা দুর্বল  ", score: 1 },
            { text: "দুর্বল", score: -5 }
        ]
    },
    {
        question: "তোমার প্রিয় কাজ",
        options: [
            { text: "বই পড়া", score: 10 },
            { text: "স্পোর্টস", score: 10 },
            { text: "ডিজিটাল জগতে ভ্রমন ", score: -5 },
            { text: "খাওয়া ও ঘুম ", score: -5 }
        ]
    },
    {
        question: "যিনি তোমার প্রিয় ব্যক্তিত্ব",
        options: [
            { text: "তিনি একজন সাংবাদিক  ", score: 1 },
            { text: "তিনি একজন মহান নেতা  ", score: 2 },
            { text: "তিনি একজন বিজ্ঞানী", score: 3 },
            { text: "তিনি একজন ব্যবসায়ী ", score: 4 }
        ]
    },
    {
        question: "কোনটি করতে না পারলে তীব্র কষ্ট বোধ হয়",
        options: [
            { text: "পড়া লেখা", score: 10 },
            { text: "মোবাইল ব্যবহার", score: -5 },
            { text: "মাঠে গিয়ে খেলাধুলা ", score: 5 },
            { text: "বন্ধুদের সাথে  মজা করা  ", score: 5 }
        ]
    },
    {
        question: "তোমার প্রিয় স্থান",
        options: [
            { text: "নিজ বাড়ি", score: 5 },
            { text: "স্কুল", score: 10 },
            { text: "খেলার মাঠ", score: 10 },
            { text: "বন্ধুদের সাথে মজা করার স্থান", score: -5 }
        ]
    },
    {
        question: "কিসে তোমার বেশি ভয় বা লজ্জা অনুভব হয় ",
        options: [
            { text: "ঊচু স্থানে উঠলে ভয়", score: -5 },
            { text: "পানিতে পড়ে গেলে", score: -5 },
            { text: "প্রতিযোগিতায় ১ম না হওয়ার লজ্জা  ", score: 10 },
            { text: "মায়ের রাগ ", score: 5 }
        ]
    },
    {
        question: "তোমাকে নিয়ে পিতামাতার স্বপ্ন ",
        options: [
            { text: "ডাক্তার ", score: 0 },
            { text: "ইঞ্জিনিয়ার", score: 0 },
            { text: "শিক্ষক", score: 0 },
            { text: "খেলোয়াড়", score: 0 }
        ]
    },
    {
        question: "সুযোগ পেলে তুমি কোন দেশে বাস করতে পছন্দ করবে ",
        options: [
            { text: "আমেরিকা", score: 0 },
            { text: "মালেশিয়া", score: 0 },
            { text: "অস্ট্রেলিয়া", score: 0 },
            { text: "কোনটিই নয়", score: 10 }
        ]
    },
    {
        question: "মাধ্যমিকের ফলাফল ",
        options: [
            { text: "জিপিএ ৫ ", score: 10 },
            { text: "জিপিএ ৪।৫ ", score: 5 },
            { text: "জিপিএ ৪।৫ এর নিচে", score: 0 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        question: "উচ্চ মাধ্যমিকের ফলাফল ",
        options: [
            { text: "জিপিএ ৫ ", score: 10 },
            { text: "জিপিএ ৪।৫ ", score: 5 },
            { text: "জিপিএ ৪।৫ এর নিচে", score: 0 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        question: "গত বছরে স্কুলের ফলাফল ",
        options: [
            { text: "ক্লাসের প্রথম ৫ জনের মাঝে", score: 10 },
            { text: "ক্লাসের ৬ হতে ১০ জনের মাঝে ", score: 5 },
            { text: "ক্লাসের ১১ হতে ২০ জনের মাঝে  ", score: 0 },
            { text: "ক্লাসের প্রথম ২০ জনের বাইরে ", score: -5 }
        ]
    },
    {
        question: "বন্ধুরা তোমার মতামত কতটা মেনে চলে ",
        options: [
            { text: "ভালোভাবে মেনে চলে ", score: 10 },
            { text: "মোটামুটি মেনে চলে ", score: 5 },
            { text: "কম মেনে চলে  ", score: 0 },
            { text: "মেনে চলে না ", score: -5 }
        ]
    },
    {
        question: "পড়ালেখা করতে কতটা আনন্দিত অনুভুব করো ",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "অল্প আনন্দ হয়  ", score: 0 },
            { text: "আনন্দ পাই না", score: -5 }
        ]
    }
    ,
    {
        question: "কোন সমস্যার বিষয়ে গভির মনোযোগ দেওয়ার সক্ষমতা ",
        options: [
            { text: "শক্তিশালী", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "মনোযোগ দিতে পারি না ", score: -5 }
        ]
    }
    ,
    {
        question: "পরিবারের অন্যরা তোমার মতামতকে কতটা গুরুত্ব দেয় ",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "কেও আমাকে গুরুত্ব দেয় না  ", score: -5 }
        ]
    }
    ,
    {
        question: "নতুন কিছু আবিস্কার করতে কতটা চেষ্টা কর ",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "চেষ্টা করি না", score: -5 },
            { text: "মোটামুটি", score: 5 },
            { text: "অল্প চেষ্টা করি", score: 0 }
        ]
    }
    ,
    {
        question: "যে কোন সমস্যা সমাধান করার সক্ষমতা ",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "জানা নাই", score: -5 }
        ]
    }
    ,
    {
        question: "শপিং করতে কেমন আনন্দ হয় ",
        options: [
            { text: "অত্যন্ত বেশি", score: -5 },
            { text: "মোটামুটি", score: 10 },
            { text: "ভালো লাগে না ", score: 1 },
            { text: "ভালো লাগে না ", score: 0 }
        ]
    },
    {
        question: "অন্যদের সামনে নিজ বক্তব্য উপস্থাপনের সক্ষমতা ",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "পারি না", score: -5 },
            { text: "কিছুটা ভয় লাগে", score: 0 }
        ]
    },
    {
        question: "চ্যালেঞ্জ সমাধানে ধৈর্য ",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "কিছুটা দুর্বল ", score: 0 }
        ]
    },
    {
        question: "চ্যালেঞ্জ গ্রহণের সক্ষমতা ",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "খুব কম চ্যলেঞ্জ নিতে পছন্দ করি", score: 0 }
        ]
    },
    {
        question: "ইংরেজিতে কথা বলার সক্ষমতা",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "দুর্বল", score: 0 }
        ]
    },
    {
        question: "নিজের মতামত ইংরেজিতে  লেখার সামর্থ্য ",
        options: [
            { text: "অত্যন্ত ভাল", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        question: "স্কুল বা কলেজের কোন প্রতিযোগিতায় কি কোন পুরস্কার পেয়েছো? ",
        options: [
            { text: "১ম বা ২য় ", score: 10 },
            { text: "৩য়", score: 5 },
            { text: "নাই", score: -5 },
            { text: "অন্যান্য", score: 0 }
        ]
    },
    {
        question: "তোমার প্রিয় বন্ধুর সংখ্যা ",
        options: [
            { text: "৫ এর কম", score: 0 },
            { text: "৫ হতে ১৫ এর মাঝে ", score: 5 },
            { text: "নাই", score: -5 },
            { text: "১৫ এর অধিক", score: 10 }
        ]
    },
    {
        question: "নীরবতা কতটা ভালো লাগে",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 10 },
            { text: "নীরবতা অপছন্দ করি", score: 0 },
            { text: "মোটামুটি ভালো লাগে", score: 5 },
            { text: "জানা নাই ", score: -5 }
        ]
    },
    {
        question: "হৈচৈ আনন্দ করতে তোমার কতটা ভালো লাগে ",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 0 },
            { text: "পছন্দ করি না ", score: 10 },
            { text: "মোটামুটি ভালো লাগে ", score: 5 },
            { text: "জানা নাই ", score: -5 }
        ]
    }
    ,
    {
        question: "রাতে সধারনত কখন ঘুমাও ",
        options: [
            { text: "রাত ১১ টা এর আগে", score: 10 },
            { text: "রাত ১১ টা হতে ১২ টা এর মাঝে", score: 5 },
            { text: "কোন নির্দিষ্ট নাই", score: -5 },
            { text: "রাত ১২ টা এর পরে  ", score: 0 }
        ]
    },
    {
        question: "শারীরিক শ্রমের কাজ করার অভ্যাস কেমন ",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 10 },
            { text: "খুব কম ", score: 0 },
            { text: "নাই", score: -5 },
            { text: "মোটামুটি", score: 5 }
        ]
    },
    {
        question: "প্রিয় শখ",
        options: [
            { text: "এডভেঞ্চার", score: 5 },
            { text: "বই পড়া ", score: 10 },
            { text: "স্মার্ট ফোন ব্যবহার   ", score: -5 },
            { text: "স্মার্ট ফোন ব্যবহার  ", score: 0 }
        ]
    }
];


const quizContainer = document.getElementById('quiz');
const footer = document.getElementById('footer');
const timeDisplay = document.getElementById('time');
const questionNumberDisplay = document.getElementById('current-question');

const userAnswers = []; //array to store user's selected answers

let currentQuestion = 0;

// Function to load question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');
    
    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
}
// Function to start timer
function startTimer() {
    let time = 30 * 60; 
    setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--; // Decrease time by 1 second
        if (time < 0) {
            clearInterval(); // Stop the timer when it reaches 0
            showResult(); // Display result when timer reaches 0
        }
    }, 1000);
}

// Function to check answer
function checkAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex; // Storeselected answer
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


// Function to calculate score for a question
function calculateScore(questionIndex) {
    const selectedOptionIndex = userAnswers[questionIndex];
    const selectedOption = quizData[questionIndex].options[selectedOptionIndex];
    return selectedOption.score;
}


// Function to show result
function showResult() {
    let totalScore = 0;
    for (let i = 0; i < quizData.length; i++) {
        totalScore += calculateScore(i);
    }

    let resultMessage;
    if (totalScore >= 80) {
        resultMessage = "Excellent! You scored high marks.";
    } else if (totalScore >= 60) {
        resultMessage = "Good job! You scored well.";
    } else if (totalScore >= 40) {
        resultMessage = "Not bad! You scored okay.";
    } else {
        resultMessage = "Keep practicing! You scored low marks.";
    }

    quizContainer.innerHTML = `
        <div class="result">${resultMessage}</div>
        <div class="total-score">Total Score: ${totalScore}</div>
    `;
    footer.style.display = 'none';
}


// Load initial question
loadQuestion();
startTimer();
