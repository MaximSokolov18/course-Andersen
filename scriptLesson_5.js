//Программа считываветься по строчно
//Слушатели собитий попадают в стек где программа понимает что єто webAPI
// дальше ждёт пока будет выполнено условие
// После чего отправляет callback в очередь.
// По очереди проходит Event Loop и отправляет её в стек
button.addEventListener('click', () => {
  //callback попадает в стек вызова
  //Промис попадает в очередь как микрозадача
  Promise.resolve().then(() => console.log('Microtask 1'));
  //Выводиться "Listener 1"
  console.log('Listener 1');
});
//После выполнения всех микрозадач, будет просматриваться очередь макрозадач
//Event loop возьмёт задачу с очереди микрозадач так как макрозадача закончилась
//Выпонялняеться микрозадача 'Microtask 1'
//И только поcле этого пойдёт слудующий callback

//callback попадает в очередь
button.addEventListener('click', () => {
  //callback попадает в стек вызова
  //Промис попадает в очередь как микрозадача
  Promise.resolve().then(() => console.log('Microtask 2'));
  //Выводиться "Listener 2"
  console.log('Listener 2');
});
//После выпонялняеться микрозадача 'Microtask 2'

// Результат:
// 1)Listener 1
// 2)Microtask 1
// 3)Listener 2
// 4)Microtask 2

//Отправляется в webAPi
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

//Отправляется в webAPi
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});

//Вызываеться click(),
//после чего вызывает callback слушателей событий
//то есть они добавляються в стек вызова
//Дальше промисы попадают в очередь микрозадач по порядку,
// а console.log() вызываеться по порядку
// после опустошения стека выводяться микрозадачи
button.click();
// При нажатии на кнопку будет отрабатываться первый вариант

// Результат:
// 1)Listener 1
// 2)Listener 2
// 3)Microtask 1
// 4)Microtask 2

function fakeRequest(url) {
  return new Promise((res, rej) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;

    setTimeout(() => res(url), delayTime);
  });
}

function resolveUrls(urls) {
  const result = [];
  return new Promise((resolve) => {
    urls.forEach((url) => {
      fakeRequest(url)
        .then((res) => {
          result.push(res);
          if (result.length === urls.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
