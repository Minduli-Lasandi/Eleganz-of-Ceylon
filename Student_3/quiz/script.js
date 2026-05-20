 const questions = [
    {
        question: "How was Sri Lanka formerly known?",
        answers: [
            { text: "Burma", correct: false},
            { text: "Ceylon", correct: true},
            { text: "Formosa", correct: false},
            { text: "Nyasaland", correct: false},
        ]
    },
    {
        question: "Which is the capital of Sri Lanka?",
        answers: [
            { text: "Sri Jayawardenapura Kotte", correct: true},
            { text: "Trincomalee", correct: false},
            { text: "Galle", correct: false},
            { text: "Colombo", correct: false},
        ]
    },
    {
        question: "Which is the currency of Sri Lanka?",
        answers: [
            { text: "Taka", correct: false},
            { text: "Yen", correct: false},
            { text: "Rupee", correct: true},
            { text: "Bhat", correct: false},
        ]
    },
    {
        question: "Which is the longest river i Sri Lanka?",
        answers: [
            { text: "Cauvery", correct: false},
            { text: "Padma", correct: false},
            { text: "Amban", correct: false},
            { text: "Mahaweli", correct: true},
        ]
    },
    {
        question: "Which is the highest point in Sri Lanka?",
        answers: [
            { text: "Adam's Peak", correct: false},
            { text: "Piduruthalagala", correct: true},
            { text: "Krigalpotta", correct: false},
            { text: "Godwin Austen", correct: false},
        ]
    },
    {
        question: "How many districts are there in Sri Lanka?",
        answers: [
            { text: "30", correct: false},
            { text: "25", correct: true},
            { text: "12", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        question: "What is the main religion of Sri Lanka?",
        answers: [
            { text: "Islam", correct: false},
            { text: "Hinduism", correct: false},
            { text: "Buddhism", correct: true},
            { text: "Christianity", correct: false},
        ]
    },
    {
        question: "What is the official language of Sri Lanka?",
        answers: [
            { text: "Tamil", correct: false},
            { text: "Sinhala", correct: true},
            { text: "Hindi", correct: false},
            { text: "English", correct: false},
        ]
    }
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 });

 startQuiz();