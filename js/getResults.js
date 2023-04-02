const getResult = (element) => {
  const id = parseInt(element.id);
  if (id === currentQuestion.answer) {
    element.classList.add("correct");
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");

    const optionLength = optionContainer.children.length;
    for (let i = 0; i < optionLength; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }

  attempt++;
  totalAttempt++;
  unclickableOptions();
};

const unclickableOptions = () => {
  const optionLength = optionContainer.children.length;
  for (let i = 0; i < optionLength; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
};

const answersIndicator = () => {
  answersIndicatorContainer.textContent = "";
  const numberOfQuestions = filteredQuestions.length;
  for (let i = 0; i < numberOfQuestions; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
};

const updateAnswerIndicator = (markType) => {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
};

const nextQuestion = () => {
  if (questionCounter === filteredQuestions.length) {
    quizOver();
  } else {
    getNewQuestion();
  }
};
