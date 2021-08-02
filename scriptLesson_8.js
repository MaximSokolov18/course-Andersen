function addChar(char) {
  const titleCalc = document.getElementsByClassName('calculator__real-action');
  const strTitle = titleCalc[0].innerText;

  if (strTitle === '0' && char !== '.') {
    titleCalc[0].innerText = '';
  }

  if (
    (strTitle.includes('.') && char === '.') ||
    (strTitle.includes('-') && char === '-')
  ) {
    return;
  }

  if (char === '-' && !strTitle.includes('-')) {
    titleCalc[0].innerText = `${char}${titleCalc[0].innerText}`;
    return;
  }

  titleCalc[0].innerText = `${titleCalc[0].innerText}${char}`;
}

function subtractOneChar() {
  const titleCalc = document.getElementsByClassName('calculator__real-action');
  const arrtitleCalc = titleCalc[0].innerText.split('');
  arrtitleCalc.pop();
  titleCalc[0].innerText = arrtitleCalc.join('');
}

function addActionToJournal(pastAction, result) {
  if (pastAction === '') {
    return;
  }

  const list = document.createElement('li');
  list.classList.add('actionCalc');
  list.insertAdjacentHTML('afterbegin', `<p>${pastAction}<p>`);
  list.insertAdjacentHTML('beforeend', `<h2>${result}<h2>`);
  calcJurnal.prepend(list);
}

function clearJournal() {
  const list = document.getElementsByClassName('actionCalc');
  const arrList = [...list];
  arrList.forEach((li) => li.remove());
}

function repeatedAction(dataOutput) {
  const firstNum = dataOutput.arrPastText[0];
  const action = dataOutput.arrPastText[1];
  const secondNum = dataOutput.realText;

  actions.forEach((action) => {
    if (action.value === dataOutput.arrPastText[1]) {
      dataOutput.pastAction[0].innerText = `${action.func(
        dataOutput.arrPastText[0],
        dataOutput.realText
      )} ${dataOutput.char}`;
      dataOutput.titleCalc[0].innerText = '0';
    }
  });

  const resultAction = dataOutput.pastAction[0].innerText.split(' ')[0];
  const strForJournal = `${firstNum} ${action} ${secondNum} =`;
  addActionToJournal(strForJournal, resultAction);
}

function addOneAction(char) {
  const pastAction = document.getElementsByClassName('calculator__past-action');
  const titleCalc = document.getElementsByClassName('calculator__real-action');
  const arrPastText = pastAction[0].innerText.split(' ');
  const realText = titleCalc[0].innerText;

  if (arrPastText.includes('') || arrPastText.includes('=')) {
    pastAction[0].innerText = `${titleCalc[0].innerText} ${char}`;
  } else {
    repeatedAction({ arrPastText, pastAction, realText, char, titleCalc });
  }

  titleCalc[0].innerText = '0';
}

function solutionExpression() {
  const pastAction = document.getElementsByClassName('calculator__past-action');
  const titleCalc = document.getElementsByClassName('calculator__real-action');
  const arrPastText = pastAction[0].innerText.split(' ');
  const realText = titleCalc[0].innerText;

  if (arrPastText.includes('=')) {
    return;
  }

  actions.forEach((action) => {
    if (action.value === arrPastText[1]) {
      pastAction[0].innerText = `${pastAction[0].innerText} ${realText} =`;
      titleCalc[0].innerText = action.func(arrPastText[0], realText);
    }
  });

  addActionToJournal(pastAction[0].innerText, titleCalc[0].innerText);
}

function clearTitleCalc() {
  const titleCalc = document.getElementsByClassName('calculator__real-action');
  titleCalc[0].innerText = '0';
}

function clearAllTitle() {
  const pastAction = document.getElementsByClassName('calculator__past-action');
  pastAction[0].innerText = '';
  clearTitleCalc();
}

function clickKeyCalc(event) {
  const target = event.target;
  const char = target.innerText;

  if (target.className === 'input-char') {
    addChar(char);
  } else if (target.id === 'button-erase') {
    subtractOneChar();
  } else if (target.className === 'input-char calc-action') {
    addOneAction(char);
  } else if (target.id === 'button-equal') {
    solutionExpression();
  } else if (target.id === 'button-CE') {
    clearTitleCalc();
  } else if (target.id === 'button-C') {
    clearAllTitle();
  }
}

const buttonsCalc = document.querySelector('.calculator__buttons');
const buttonClearJournal = document.querySelector('.journal-clear');
const actions = [
  {
    value: '*',
    func: (a, b) => Number(a) * Number(b),
  },
  {
    value: '/',
    func: (a, b) => Number(a) / Number(b),
  },
  {
    value: '+',
    func: (a, b) => Number(a) + Number(b),
  },
  {
    value: '-',
    func: (a, b) => Number(a) - Number(b),
  },
];

buttonsCalc.addEventListener('click', clickKeyCalc);
buttonClearJournal.addEventListener('click', clearJournal);
