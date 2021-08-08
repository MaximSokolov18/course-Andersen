const inputTask = document.querySelector('.input-task');
const addTaskButton = document.querySelector('.todo-list__button-add');
const tasksList = document.querySelector('.tasks-list');
const blockTasks = document.querySelector('.block-tasks');

let tasks = [];
let idTask;

function updateStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function generatorId() {
  if (tasks.length > 0) {
    return tasks[tasks.length - 1].id + 1;
  } else {
    return 0;
  }
}

function createTaskList(dataTask) {
  const task = document.createElement('li');
  const textTask = dataTask.textTask;
  const checkbox = document.createElement('input');

  task.classList.add('tasks-list__task', 'task');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task__checkbox');

  if (!!dataTask.done) {
    task.classList.add('task_done');
    checkbox.checked = true;
  }

  task.append(checkbox);
  task.insertAdjacentHTML(
    'beforeend',
    `<p class="task__text" id=${dataTask.id}>${textTask}</p>`
  );
  task.insertAdjacentHTML(
    'beforeend',
    '<button class="task__button-delete"><p class="button-delete__text">❌</p></button>'
  );
  task.insertAdjacentHTML(
    'beforeend',
    '<button class="task__button-edit"><p class="button-edit__text">✍</p></button>'
  );

  tasksList.prepend(task);
}

function showTasksFromStorage() {
  if (!localStorage.tasks) {
    return;
  }

  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((dataTask) => createTaskList(dataTask));
}

function addTaskToList() {
  const task = document.createElement('li');
  const inputTask = document.querySelector('.input-task');
  const idElement = generatorId();

  task.classList.add('tasks-list__task', 'task');
  task.insertAdjacentHTML(
    'beforeend',
    `<input class="task__checkbox" type="checkbox" />`
  );
  task.insertAdjacentHTML(
    'beforeend',
    `<p class="task__text" id="${idElement}">${inputTask.value}</p>`
  );
  task.insertAdjacentHTML(
    'beforeend',
    '<button class="task__button-delete"><p class="button-delete__text">❌</p></button>'
  );
  task.insertAdjacentHTML(
    'beforeend',
    '<button class="task__button-edit"><p class="button-edit__text">✍</p></button>'
  );
  tasksList.prepend(task);
}

function addTaskToStorange() {
  const idElement = generatorId();
  tasks.push(new Task(inputTask.value, idElement));
  updateStorage();
}

function toggleCheckbox(checkbox) {
  const classListTask = checkbox.parentElement.classList;
  const idElement = Number(checkbox.parentElement.children[1].id);

  if (checkbox.checked) {
    classListTask.add('task_done');
  } else {
    classListTask.remove('task_done');
  }

  tasks.find((dataTask) => updateDone(dataTask, idElement));

  updateStorage();
}

function updateDone(dataTask, idElement) {
  if (dataTask.id === idElement) {
    dataTask.done = !dataTask.done;
    return true;
  }

  return false;
}

function enableTextEdit(target) {
  const textTask = target.parentElement.children[1];
  const buttonDelete = target.parentElement.children[2];
  const textButton = target.children[0];
  idTask = Number(textTask.id);

  textButton.innerText = '✅';
  textTask.contentEditable = true;
  target.classList.add('button-edit_on');
  buttonDelete.classList.add('button-delete_off');
  textTask.focus();

  const tasksOffEdit = document.querySelectorAll('.task__button-edit');
  const arrTasksOffEdit = [...tasksOffEdit];

  arrTasksOffEdit.forEach((button) => {
    if (!button.classList.contains('button-edit_on')) {
      button.disabled = true;
    }
  });
}

function disableTextEdit(target) {
  const textTask = target.parentElement.children[1];
  const buttonDelete = target.parentElement.children[2];
  const textButton = target.children[0];

  textButton.innerText = '✍';
  textTask.contentEditable = false;
  target.classList.remove('button-edit_on');
  buttonDelete.classList.remove('button-delete_off');

  const tasksOffEdit = document.querySelectorAll('.task__button-edit');
  const arrTasksOffEdit = [...tasksOffEdit];

  arrTasksOffEdit.forEach((button) => {
    if (!button.classList.contains('button-edit_on')) {
      button.disabled = false;
    }
  });

  tasks.find((dataTask) => updateTextToStorage(dataTask, textTask));
}

function updateTextToStorage(dataTask, textTask) {
  if (dataTask.id === idTask) {
    dataTask.textTask = textTask.innerText;
    updateStorage();
    return true;
  }

  return false;
}

function deleteTask(target) {
  const task = target.parentElement;
  const idTask = parseInt(task.children[1].id);
  task.remove();

  tasks.find((dataTask, index) => {
    if (dataTask.id === idTask) {
      tasks.splice(index, 1);
      return true;
    }

    return false;
  });

  updateStorage();
}

function deleteTasksDone() {
  let index = 0;
  const fakeArrTasks = [...tasks];

  fakeArrTasks.forEach((dataTask) => {
    if (dataTask.done) {
      tasks.splice(index, 1);
      index -= 1;
    }
    index += 1;
  });

  tasksList.innerHTML = '';
  updateStorage();
  showTasksFromStorage();
}

function deleteTasksAll() {
  tasks = [];
  tasksList.innerHTML = '';
  updateStorage();
  showTasksFromStorage();
}

class Task {
  constructor(textTask, id) {
    this.textTask = textTask;
    this.done = false;
    this.id = id;
  }
}

addTaskButton.addEventListener('click', function () {
  addTaskToList();
  addTaskToStorange();
  inputTask.value = '';
});

blockTasks.addEventListener('click', function (event) {
  const target = event.target;
  const className = target.className;

  if (className === 'task__checkbox') {
    toggleCheckbox(target);
  } else if (className === 'task__button-edit') {
    enableTextEdit(target);
  } else if (className === 'task__button-edit button-edit_on') {
    disableTextEdit(target);
  } else if (className === 'task__button-delete') {
    deleteTask(target);
  } else if (className === 'todo-list__delete-done') {
    deleteTasksDone();
  } else if (className === 'todo-list__delete-all') {
    deleteTasksAll();
  }
});

showTasksFromStorage();
