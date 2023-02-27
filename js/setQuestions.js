const setQuestion = ()=> {
  filteredQuestions.forEach((question) => {
    availableQuestions.push(question);
  });
}

function getNewQuestion() {
  questionNumber.textContent =
    "Questão " + (questionCounter + 1) + " de " + filteredQuestions.length;

  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  const index1 = availableQuestions.indexOf(questionIndex);
  availableQuestions.splice(index1, 1);

  if (currentQuestion.hasOwnProperty("img")) {
    const img = document.createElement("img");
    img.src = currentQuestion.img;
    questionText.appendChild(img);
  }

  const optionLength = currentQuestion.options.length;

  for (let i = 0; i < optionLength; i++) {
    availableOptions.push(i);
  }

  optionContainer.textContent = "";
  let animationDelay = 0.2;
  for (let i = 0; i < optionLength; i++) {
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    const index2 = availableOptions.indexOf(optionIndex);
    availableOptions.splice(index2, 1);
    const alternatives = document.createElement("div");
    alternatives.textContent = "get";
    const option = document.createElement("div");
    option.textContent = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay += 0.2;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }

  questionCounter++;
}
