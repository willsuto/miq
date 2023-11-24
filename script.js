/* Variables */
//#region
// Buttons
const basicButton = document.querySelector('#basicQuestion');
const functionButton = document.querySelector('#functionQuestion');
const callbacksButton = document.querySelector('#callbacksQuestion');
const closureButton = document.querySelector('#closureQuestion');
const recursionButton = document.querySelector('#recursionQuestion');
const oopButton = document.querySelector('#oopQuestion');
const copyButton = document.querySelector('.copy');
const testCodeButton = document.querySelector('.showTestCode');
const testCopyButton = document.querySelector('.testCopy');
// Difficulty slider
const difficultySlider = document.querySelector('#functionSlider');
// Code snippets and displays
const testTextBox = document.querySelector('.testText');
const testSnippet = document.querySelector('.testSnippet');
const snippet = document.querySelector('.snippet');
//#endregion

/* Question generator */
// Question generator outer function
function generator(questionList) {
    // Persisten lexical scope variable to track chosen questions
    const indexArray = [];
    for (let i = 0; i < questionList.length; i++) indexArray.push(i);
    // Question generator inner function
    function inner() {
        if (indexArray.length === 0) {
            for (let i = 0; i < questionList.length; i++) indexArray.push(i);
        }
        let index = Math.floor(Math.random() * indexArray.length);
        let i = indexArray[index];
        let question = questionList[i].question;
        let testCode = questionList[i].test;
        snippet.innerHTML = question;
        testSnippet.innerHTML = testCode;
        indexArray.splice(index, 1);
    }
    return inner;
}

/* Button Functionality */
//#region
/* Basic */
const generateBasicQuestion = generator(basicQuestions);
basicButton.addEventListener('click', generateBasicQuestion);

/* Functions */
// Sort function questions into arrays by difficulty
const easyFunctionQuestions = [];
const mediumFunctionQuestions = [];
const hardFunctionQuestions = [];
functionQuestions.forEach(question => {
    if (question.difficulty === 1) easyFunctionQuestions.push(question);
    if (question.difficulty === 2) mediumFunctionQuestions.push(question);
    if (question.difficulty === 3) hardFunctionQuestions.push(question);
});
// Make a generator function for each difficulty level 
const generateEasyFunctionQuestion = generator(easyFunctionQuestions);
const generateMediumFunctionQuestion = generator(mediumFunctionQuestions);
const generateHardFunctionQuestion = generator(hardFunctionQuestions);
// Generate question according to difficulty
function generateFunctionQuestion() {
    let difficulty = difficultySlider.value;
    if (difficulty === '1') generateEasyFunctionQuestion();
    if (difficulty === '2') generateMediumFunctionQuestion();
    if (difficulty === '3') generateHardFunctionQuestion();
}
// Generate question when Functions button clicked
functionButton.addEventListener('click', generateFunctionQuestion);

/* Callbacks */
// Sort callbacks questions into arrays by difficulty
const easyCallbacksQuestions = [];
const mediumCallbacksQuestions = [];
const hardCallbacksQuestions = [];
callbackQuestions.forEach(question => {
    if (question.difficulty === 1) easyCallbacksQuestions.push(question);
    if (question.difficulty === 2) mediumCallbacksQuestions.push(question);
    if (question.difficulty === 3) hardCallbacksQuestions.push(question);
});
// Make a generator function for each difficulty level 
const generateEasyCallbacksQuestion = generator(easyCallbacksQuestions);
const generateMediumCallbacksQuestion = generator(mediumCallbacksQuestions);
const generateHardCallbacksQuestion = generator(hardCallbacksQuestions);
// Generate question according to difficulty
function generateCallbacksQuestion() {
    let difficulty = difficultySlider.value;
    if (difficulty === '1') generateEasyCallbacksQuestion();
    if (difficulty === '2') generateMediumCallbacksQuestion();
    if (difficulty === '3') generateHardCallbacksQuestion();
}
// Generate question when Callbacks button clicked
callbacksButton.addEventListener('click', generateCallbacksQuestion);

/* Closure */
// Sort closure questions into arrays by difficulty
const easyClosureQuestions = [];
const mediumClosureQuestions = [];
const hardClosureQuestions = [];
closureQuestions.forEach(question => {
    if (question.difficulty === 1) easyClosureQuestions.push(question);
    if (question.difficulty === 2) mediumClosureQuestions.push(question);
    if (question.difficulty === 3) hardClosureQuestions.push(question);
});
// Make a generator function for each difficulty level 
const generateEasyClosureQuestion = generator(easyClosureQuestions);
const generateMediumClosureQuestion = generator(mediumClosureQuestions);
const generateHardClosureQuestion = generator(hardClosureQuestions);
// Generate question according to difficulty
function generateClosureQuestion() {
    let difficulty = difficultySlider.value;
    if (difficulty === '1') generateEasyClosureQuestion();
    if (difficulty === '2') generateMediumClosureQuestion();
    if (difficulty === '3') generateHardClosureQuestion();
}
// Generate question when Recursion button clicked
closureButton.addEventListener('click', generateClosureQuestion);

/* Recursion */
// Sort recursion questions into arrays by difficulty
const easyRecursionQuestions = [];
const mediumRecursionQuestions = [];
const hardRecursionQuestions = [];
recursionQuestions.forEach(question => {
    if (question.difficulty === 1) easyRecursionQuestions.push(question);
    if (question.difficulty === 2) mediumRecursionQuestions.push(question);
    if (question.difficulty === 3) hardRecursionQuestions.push(question);
});
// Make a generator function for each difficulty level 
const generateEasyRecursionQuestion = generator(easyRecursionQuestions);
const generateMediumRecursionQuestion = generator(mediumRecursionQuestions);
const generateHardRecursionQuestion = generator(hardRecursionQuestions);
// Generate question according to difficulty
function generateRecursionQuestion() {
    let difficulty = difficultySlider.value;
    console.log(difficulty);
    if (difficulty == 1) generateEasyRecursionQuestion();
    if (difficulty == 2) generateMediumRecursionQuestion();
    if (difficulty == 3) generateHardRecursionQuestion();
}
// Generate question when Recursion button clicked
recursionButton.addEventListener('click', generateRecursionQuestion);

/* OOP */
// Sort Oop questions into arrays by difficulty
const easyOopQuestions = [];
const mediumOopQuestions = [];
const hardOopQuestions = [];
oopQuestions.forEach(question => {
    if (question.difficulty === 1) easyOopQuestions.push(question);
    if (question.difficulty === 2) mediumOopQuestions.push(question);
    if (question.difficulty === 3) hardOopQuestions.push(question);
});
// Make a generator function for each difficulty level 
const generateEasyOopQuestion = generator(easyOopQuestions);
const generateMediumOopQuestion = generator(mediumOopQuestions);
const generateHardOopQuestion = generator(hardOopQuestions);
// Generate question according to difficulty
function generateOopQuestion() {
    let difficulty = difficultySlider.value;
    if (difficulty === '1') generateEasyOopQuestion();
    if (difficulty === '2') generateMediumOopQuestion();
    if (difficulty === '3') generateHardOopQuestion();
}
// Generate question when Oop button clicked
oopButton.addEventListener('click', generateOopQuestion);
//#endregion

// Copy snippet to clipboard
function copySnippet() {
    navigator.clipboard.writeText(snippet.innerHTML);
}
copyButton.addEventListener('click', copySnippet);

// Copy test snippet to clipboard
function copyTestSnippet() {
    navigator.clipboard.writeText(testSnippet.innerHTML);
}
testCopyButton.addEventListener('click', copyTestSnippet);

// Toggle test code
function toggleTestCode() {
    testTextBox.classList.toggle('hidden');
}
testCodeButton.addEventListener('click', toggleTestCode);









